"use client";

import { getLocationLatLongList } from "@/lib/location-info";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const LocationSwitcher = () => {
  const [showSwitch, setShowSwitch] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function getLocationList() {
      const locationList = await getLocationLatLongList();
      setLocations(locationList);
    }
    getLocationList();
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => {
          console.log("clicked"), setShowSwitch(!showSwitch);
        }}
      >
        <Image
          className="size-9"
          height={36}
          width={36}
          src="/link.svg"
          alt="link icon"
        />
      </button>

      {showSwitch && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            {locations.map((locationInfo) => (
              <li key={locationInfo.location}>
                <Link
                  href={`/${locationInfo.location}?latitude=${locationInfo.latitude}&longitude=${locationInfo.longitude}`}
                >
                  {" "}
                  {locationInfo.location}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
