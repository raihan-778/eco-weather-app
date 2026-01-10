import { WeatherComponent } from "@/components/WeatherComponent";

const WeatherPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return (
    <WeatherComponent location={location} lat={latitude} lon={longitude} />
  );
};

export default WeatherPage;
