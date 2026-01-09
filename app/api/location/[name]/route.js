import { getLocationByName } from "../location-utils";

export const GET = async (request, { params }) => {
  const locationData = getLocationByName(params?.name);

  return Response.json(locationData);
};
