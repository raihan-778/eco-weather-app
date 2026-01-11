import { NextResponse } from "next/server";
import { getLocations } from "./location-utils";

export async function GET() {
  try {
    const locationData = getLocations();

    return NextResponse.json(locationData);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch locations" },
      { status: 500 }
    );
  }
}
