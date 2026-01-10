import { AQIComponent } from "@/components/AQIComponent";

const AQIPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return (
    <>
      <AQIComponent location={location} lat={latitude} lon={longitude} />
    </>
  );
};

export default AQIPage;
