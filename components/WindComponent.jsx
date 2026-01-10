import { getWindData } from "@/lib/weather-info";
import Image from "next/image";
import { Card } from "./Card";

export const WindComponent = async ({ location, lat, lon }) => {
  const windInfo = await getWindData(lat, lon);

  const { speed, deg, gust } = windInfo;

  return (
    <Card>
      {" "}
      <h6 className="feature-name">Wind</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icon_wind.png"
          alt="rain icon"
          height={80}
          width={80}
        />
        <h3 className="feature-title"> {speed} meter/sec</h3>
        <span className="feature-name">{deg} degrees</span>
      </div>
    </Card>
  );
};
