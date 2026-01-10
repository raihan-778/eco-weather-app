import { Inter } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "EcoWeatherApp",
  description: "One Place Dashboard For Eco Informaton",
};

const inter = Inter({ subsets: ["latin"] });

const LocationLayout = ({ children, aqi, temperature, weather, wind }) => {
  return (
    <div className={` ${inter.className} wrapper`}>
      {aqi}
      {children}
      {temperature}
      {weather}
      {wind}
    </div>
  );
};

export default LocationLayout;
