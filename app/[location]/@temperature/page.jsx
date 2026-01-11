import { NoLocationInfo } from "@/components/NoLocationInfo";
import { TemperatureComponent } from "@/components/TemperatureComponent";
import { getResolvedLatLong } from "@/lib/location-info";

const TemperaturPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  return (
    <>
      {resolved?.lat && resolved.lon ? (
        <TemperatureComponent lat={resolved?.lat} lon={resolved.lon} />
      ) : (
        <NoLocationInfo location={location} />
      )}
    </>
  );
};

export default TemperaturPage;
