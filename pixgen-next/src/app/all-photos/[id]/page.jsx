import PhotoDetails from "@/component/PhotoDetails";
import React from "react";

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    "https://programming-hero-13-sltu.vercel.app/data.json",
  );
  const photos = await res.json();
  const photo = photos.find((p) => p.id == id);
  //   console.log(photo);
  return (
    <>
      <PhotoDetails photo={photo} />
    </>
  );
};

export default PhotoDetailsPage;
