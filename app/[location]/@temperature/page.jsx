import { TemperatureComponent } from "@/components/TemperatureComponent";

const TemperaturPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return (
    <TemperatureComponent location={location} lat={latitude} lon={longitude} />
  );
};

export default TemperaturPage;
