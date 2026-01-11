import { AQIComponent } from "@/components/AQIComponent";
import { NoLocationInfo } from "@/components/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";

const AQIPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLong(location, latitude, longitude);

  return (
    <>
      {resolved?.lat && resolved?.lon ? (
        <AQIComponent
          location={resolved.location}
          lat={resolved.lat}
          lon={resolved.lon}
        />
      ) : (
        <NoLocationInfo location={location} />
      )}
    </>
  );
};

export default AQIPage;
