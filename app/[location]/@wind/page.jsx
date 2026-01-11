import { NoLocationInfo } from "@/components/NoLocationInfo";
import { WindComponent } from "@/components/WindComponent";
import { getResolvedLatLong } from "@/lib/location-info";

const WindPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLong(location, latitude, longitude);

  return (
    <>
      {resolved?.lat && resolved.lon ? (
        <WindComponent lat={resolved?.lat} lon={resolved.lon} />
      ) : (
        <NoLocationInfo location={location} />
      )}
    </>
  );
};

export default WindPage;
