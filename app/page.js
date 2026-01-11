import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";

export default function Home() {
  // Import LocationDetector with SSR disabled
  const LocationDetector = dynamic(
    () => import("@/components/LocationDetector"),
    {
      loading: () => <Loading />,
    }
  );

  return (
    <div>
      <LocationDetector />
    </div>
  );
}
