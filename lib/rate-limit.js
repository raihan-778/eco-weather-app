// ===== lib/rate-limit.js =====
// Simple in-memory rate limiter (resets on server restart)

const rateLimitMap = new Map();

/**
 * Rate limiter using IP address
 * @param {Request} request - The incoming request
 * @param {number} limit - Maximum number of requests (default: 100)
 * @param {number} windowMs - Time window in milliseconds (default: 1 hour)
 * @returns {Object} { success: boolean, remaining: number, reset: number }
 */
export async function rateLimit(
  request,
  limit = 100,
  windowMs = 60 * 60 * 1000
) {
  // Get IP address from request
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const now = Date.now();
  const key = `${ip}`;

  // Get or create rate limit entry
  const entry = rateLimitMap.get(key) || {
    count: 0,
    resetTime: now + windowMs,
  };

  // Reset if time window has passed
  if (now > entry.resetTime) {
    entry.count = 0;
    entry.resetTime = now + windowMs;
  }

  // Increment counter
  entry.count++;
  rateLimitMap.set(key, entry);

  // Calculate remaining requests
  const remaining = Math.max(0, limit - entry.count);
  const success = entry.count <= limit;

  // Cleanup old entries (run periodically)
  if (Math.random() < 0.01) {
    // 1% chance to cleanup
    cleanup();
  }

  return {
    success,
    remaining,
    reset: entry.resetTime,
    limit,
  };
}

/**
 * Cleanup expired entries from the rate limit map
 */
function cleanup() {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap.entries()) {
    if (now > entry.resetTime + 60000) {
      // 1 minute grace period
      rateLimitMap.delete(key);
    }
  }
}

/**
 * Get rate limit headers for response
 */
export function getRateLimitHeaders(result) {
  return {
    "X-RateLimit-Limit": result.limit.toString(),
    "X-RateLimit-Remaining": result.remaining.toString(),
    "X-RateLimit-Reset": new Date(result.reset).toISOString(),
  };
}

// ===== Usage Example: app/api/location/route.js =====
/*
import { NextResponse } from "next/server";
import { getLocations } from "./location-utils";
import { rateLimit, getRateLimitHeaders } from "@/lib/rate-limit";

export async function GET(request) {
  // Apply rate limiting: 100 requests per hour
  const limiter = await rateLimit(request, 100, 60 * 60 * 1000);
  
  if (!limiter.success) {
    return NextResponse.json(
      { 
        error: "Too many requests. Please try again later.",
        retryAfter: new Date(limiter.reset).toISOString()
      },
      { 
        status: 429,
        headers: getRateLimitHeaders(limiter)
      }
    );
  }

  try {
    const locationData = getLocations();
    
    return NextResponse.json(locationData, {
      headers: getRateLimitHeaders(limiter)
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch locations" },
      { status: 500 }
    );
  }
}
*/

// ===== Usage Example: app/api/location/[name]/route.js =====
/*
import { NextResponse } from "next/server";
import { getLocationByName } from "../location-utils";
import { rateLimit, getRateLimitHeaders } from "@/lib/rate-limit";

export async function GET(request, { params }) {
  // Apply rate limiting: 100 requests per hour
  const limiter = await rateLimit(request, 100, 60 * 60 * 1000);
  
  if (!limiter.success) {
    return NextResponse.json(
      { 
        error: "Too many requests. Please try again later.",
        retryAfter: new Date(limiter.reset).toISOString()
      },
      { 
        status: 429,
        headers: getRateLimitHeaders(limiter)
      }
    );
  }

  try {
    const { name } = params;
    const locationData = getLocationByName(name);

    if (!locationData) {
      return NextResponse.json(
        { error: `Location "${name}" not found` },
        { 
          status: 404,
          headers: getRateLimitHeaders(limiter)
        }
      );
    }

    return NextResponse.json(locationData, {
      headers: getRateLimitHeaders(limiter)
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch location" },
      { status: 500 }
    );
  }
}
*/

// ===== Advanced: Persistent Rate Limiting with Vercel KV (Optional) =====
/*
If you want rate limiting that persists across deployments:

1. Install Vercel KV:
   npm install @vercel/kv

2. Set up KV in Vercel Dashboard:
   - Go to Storage tab
   - Create a KV Database
   - Link it to your project

3. Use this implementation:

import { kv } from '@vercel/kv';

export async function rateLimitKV(request, limit = 100, windowMs = 60 * 60 * 1000) {
  const ip = 
    request.headers.get('x-forwarded-for')?.split(',')[0] || 
    request.headers.get('x-real-ip') ||
    'unknown';

  const key = `rate_limit:${ip}`;
  const now = Date.now();

  // Get current count and reset time
  const data = await kv.get(key);
  
  let count = 0;
  let resetTime = now + windowMs;

  if (data) {
    const parsed = JSON.parse(data);
    if (now < parsed.resetTime) {
      count = parsed.count;
      resetTime = parsed.resetTime;
    }
  }

  count++;

  // Store updated count
  await kv.set(key, JSON.stringify({ count, resetTime }), {
    px: windowMs + 60000 // Expire after window + 1 minute
  });

  const remaining = Math.max(0, limit - count);
  const success = count <= limit;

  return {
    success,
    remaining,
    reset: resetTime,
    limit
  };
}
*/
