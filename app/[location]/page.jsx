export const dynamic = "force-dynamic";

import { LocationInfo } from "@/components/LocationInfo";
import { NoLocationInfo } from "@/components/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";

const LocationPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  return (
    <>
      {resolved?.lat && resolved.lon ? (
        <LocationInfo lat={resolved?.lat} lon={resolved.lon} />
      ) : (
        <NoLocationInfo location={location} />
      )}
    </>
  );
};
export default LocationPage;
