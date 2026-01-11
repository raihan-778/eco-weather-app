import { NoLocationInfo } from "@/components/NoLocationInfo";
import { WeatherComponent } from "@/components/WeatherComponent";
import { getResolvedLatLong } from "@/lib/location-info";

const WeatherPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  return (
    <>
      {resolved?.lat && resolved?.lon ? (
        <WeatherComponent lat={resolved.lat} lon={resolved.lon} />
      ) : (
        <NoLocationInfo location={location} />
      )}
    </>
  );
};

export default WeatherPage;
