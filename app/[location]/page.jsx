export const dynamic = "force-dynamic";

import { LocationInfo } from "@/components/LocationInfo";

const LocationPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <LocationInfo location={location} lat={latitude} lon={longitude} />;
};
export default LocationPage;
