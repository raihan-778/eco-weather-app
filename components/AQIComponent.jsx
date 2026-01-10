import { getAQIData } from "@/lib/weather-info";
import Image from "next/image";
import { Card } from "./Card";

export const AQIComponent = async ({ location, lat, lon }) => {
  const aqiData = await getAQIData(lat, lon);

  const getAQIRating = (aqi) => {
    switch (aqi) {
      case 1:
        return "Good";
      case 2:
        return "Fair";
      case 3:
        return "Moderate";
      case 4:
        return "Poor";
      case 5:
        return "Very Poor";
      default:
        return "unknown";
    }
  };

  const { main, components } = aqiData;

  const { co, no, no2, o3, so2, pm2_5, pm10, nh3 } = components;

  return (
    <Card>
      {" "}
      <h6 className="feature-name">Air Pollution & Quality</h6>
      {/* <!-- info items --> */}
      <div className="mt-3 space-y-2 lg:space-y-3">
        {/* <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icon_air_element.png"
              alt="icon"
              height={10}
              width={10}
            />
            Air Quality Index
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {getAQIRating(main.aqi)}
          </span>
        </div>
        {/* <!-- item ends --> */}
        {/* <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icon_air_element.png"
              alt="icon"
              height={10}
              width={10}
            />
            Carbon Monoxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {co} µg/m³
          </span>
        </div>
        {/* <!-- item ends --> */}
        {/* <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icon_air_element.png"
              alt="icon"
              height={10}
              width={10}
            />
            Nitric Oxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {no} ppm
          </span>
        </div>
        {/* <!-- item ends --> */}
        {/* <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icon_air_element.png"
              alt="icon"
              height={10}
              width={10}
            />
            Nitrogen Dioxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {no2} ppm
          </span>
        </div>
        {/* <!-- item ends --> */}
        {/* <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icon_air_element.png"
              alt="icon"
              height={10}
              width={10}
            />
            Ozone
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {o3} µg/m³
          </span>
        </div>
        {/* <!-- item ends --> */}
        {/* <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icon_air_element.png"
              alt="icon"
              height={10}
              width={10}
            />
            Sulfur Dioxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {so2} ppm
          </span>
        </div>
        {/* <!-- item ends --> */}
        {/* <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icon_air_element.png"
              alt="icon"
              height={10}
              width={10}
            />
            PM2.5
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {pm2_5}µg/m³
          </span>
        </div>
        {/* <!-- item ends --> */}
      </div>
    </Card>
  );
};
