import { NoLocationInfo } from "@/components/NoLocationInfo";

export const getLocationData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    );

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getLocationLatLongList = async () => {
  const response = await fetch(`http://localhost:3000/api/location`);

  const data = await response.json();
  return data;
};
export const getLocationLatLongData = async (locationName) => {
  const response = await fetch(
    `http://localhost:3000/api/location/${locationName}`
  );

  const data = await response.json();
  return data;
};

export const getResolvedLatLong = async (location, lat, lon) => {
  console.log(location, lat, lon);

  if (lat && lon) {
    return { lat, lon };
  }

  // if (!isValidLocation(location)) {
  //   return null; // Return null instead of throwing error
  // }

  const locationLatLong = await getLocationLatLongData(location);

  if (!locationLatLong.latitude && !locationLatLong.longitude) {
    return <NoLocationInfo />;
  }

  if (locationLatLong.latitude && locationLatLong.longitude) {
    const lat = locationLatLong.latitude;
    const lon = locationLatLong.longitude;
    return { lat, lon };
  }
};
