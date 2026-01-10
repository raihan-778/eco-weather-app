"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LocationDetector = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);

    const params = new URLSearchParams(searchParams);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        params.set("latitude", position.coords.latitude);
        params.set("longitude", position.coords.longitude);
        setLoading(false);

        router.push(`/current?${params.toString()}`);
      });
    }
  }, [searchParams, pathName, router]);

  return (
    <div
      div
      className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white"
    >
      {loading && (
        <>
          {" "}
          <Image
            className="border rounded-md"
            src="/network.gif"
            height={500}
            width={500}
            alt="loading..."
          />
          <p className="text-4xl text-center"> Detecting Location...</p>
        </>
      )}
    </div>
  );
};

export default LocationDetector;
