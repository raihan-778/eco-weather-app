import { WindComponent } from "@/components/WindComponent";

const WindPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <WindComponent location={location} lat={latitude} lon={longitude} />;
};

export default WindPage;
