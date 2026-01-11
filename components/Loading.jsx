import Image from "next/image";

export const Loading = () => {
  return (
    <div>
      {" "}
      <Image
        className="border rounded-md"
        src="/network.gif"
        height={500}
        width={500}
        alt="loading..."
      />
      <p className="text-4xl text-center"> Detecting Location...</p>
    </div>
  );
};
