export const dynamic = "force-dynamic";

import { LocationInfo } from "@/components/LocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";

const LocationPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  return (
    <LocationInfo location={location} lat={resolved.lat} lon={resolved.lon} />
  );
};
export default LocationPage;
