import { getLocations } from "./location-utils";

export const GET = async () => {
  const locationData = getLocations();

  return Response.json(locationData);
};

``;
