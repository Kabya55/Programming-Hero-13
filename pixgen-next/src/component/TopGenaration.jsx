import Image from "next/image";
import PhotoCard from "./PhotoCard";

const TopGenaration = async () => {
  const res = await fetch(
    "https://programming-hero-13-sltu.vercel.app/data.json",
  );
  const data = await res.json();
  const topPhotos = data.slice(0, 8);
  //   console.log(topPhotos);
  return (
    <>
      <h1 className="text-2xl font-bold mt-3">Top Generations</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </>
  );
};

export default TopGenaration;
