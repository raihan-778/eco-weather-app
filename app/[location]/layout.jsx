import Image from "next/image";
import "../globals.css";

export const metadata = {
  title: "EcoWeatherApp",
  description: "One Place Dashboard For Eco Informaton",
};

const LocationLayout = ({ children, aqi, temperature, weather, wind }) => {
  return (
    <div className="wrapper">
      <div className="overlay"></div>
      <Image
        src="/background.png"
        className="bg-img "
        width={700}
        height={1200}
        alt="background-image"
      />
      <mian className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {" "}
            {children}
            {aqi}
            {weather}
            {temperature}
            {wind}
          </div>
        </div>
      </mian>
    </div>
  );
};

export default LocationLayout;
