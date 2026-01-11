const getBaseUrl = () => {
  // In browser
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  // In Vercel production (automatically available - no setup needed!)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // In development
  return "http://localhost:3000";
};

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
  const baseUrl = getBaseUrl();

  const response = await fetch(`${baseUrl}/api/location`);

  const data = await response.json();
  return data;
};
export const getLocationLatLongData = async (locationName) => {
  const baseUrl = getBaseUrl();
  const response = await fetch(`${baseUrl}/api/location/${locationName}`);

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
    return null;
  }

  if (locationLatLong.latitude && locationLatLong.longitude) {
    const lat = locationLatLong.latitude;
    const lon = locationLatLong.longitude;
    return { lat, lon };
  }
};
