import PhotoCard from "@/component/PhotoCard";

const AllPhotoPage = async () => {
  const res = await fetch(
    "https://programming-hero-13-sltu.vercel.app/data.json",
  );
  const photos = await res.json();
  //   console.log(topPhotos);
  return (
    <>
      <div className="max-w-7xl mx-auto mt-3">
        <h1 className="text-2xl font-bold mt-3">Top Generations</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllPhotoPage;
