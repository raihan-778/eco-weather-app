import { getWeatherData } from "@/lib/weather-info";
import Image from "next/image";
import { Card } from "./Card";

export const WeatherComponent = async ({ lat, lon }) => {
  const weatherData = await getWeatherData(lat, lon);

  console.log("weather", weatherData);
  const { main, description } = weatherData;

  return (
    <Card>
      <h6 className="feature-name">Current Weather</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icon_rain.png"
          alt="rain icon"
          height={80}
          width={80}
        />
        <h3 className="feature-title">{main}</h3>
        <span className="feature-name">{description}</span>
      </div>
    </Card>
  );
};
