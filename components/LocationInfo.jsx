import { getLocationData } from "@/lib/location-info";
import { LocationSwitcher } from "./LocationSwitcher";

export const LocationInfo = async ({ location, lat, lon }) => {
  const locationData = await getLocationData(lat, lon);

  const { continent, countryName, city } = locationData;

  console.log(locationData);

  return (
    <div className="col-span-12 flex flex-col justify-end lg:col-span-8 2xl:col-span-9">
      <div>
        <div className="mb-2 flex items-center gap-2">
          <h2 className="text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]">
            {continent}
          </h2>
          <LocationSwitcher lat={lat} lon={lon} location={location} />
          {/* Location switcher will be here */}
        </div>
        <p className="text-lg text-[#C4C4C4] lg:text-xl">
          {countryName} | {city}
        </p>
        <div className="flex items-center gap-2 text-xs text-[#92B6F5] lg:text-sm">
          <span>{new Date().toLocaleTimeString()}</span>{" "}
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};
