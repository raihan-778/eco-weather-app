import Link from "next/link";
import { Card } from "./Card";

export const NoLocationInfo = ({ location }) => {
  return (
    <Card>
      {/* Background Image */}

      {/* Main Content */}
      <div className="relative z-30 w-full max-w-2xl px-4">
        <div className="card">
          {/* Animated Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full animate-pulse" />
              <svg
                className="w-10 h-10 text-red-400 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <line
                  x1="4"
                  y1="4"
                  x2="20"
                  y2="20"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  className="text-red-500"
                />
              </svg>
            </div>
          </div>

          <div className="feature-main">
            <h1 className="text-md font-bold text-center">
              No Location Found with this location params :{" "}
              <span className="text-red-600 text-3xl font-bold">
                {location}
              </span>
            </h1>

            <div className="mt-8">
              <Link
                href="/"
                className="group relative inline-flex items-center gap-5 px-6 py-2 bg-gradient-to-r from-slate-500 to-slate-700 rounded-md font-semibold text-white shadow-lg hover:shadow-slate-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <svg
                  className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>Home</span>
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
