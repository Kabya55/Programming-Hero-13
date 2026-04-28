import Image from "next/image";
import Link from "next/link";
import React from "react";

const PhotoDetails = ({ photo }) => {
  return (
    <div className="w-full px-6 lg:px-20">
      <h2 className="text-xl font-bold mb-4">Photo Details</h2>

      <div className="bg-white border rounded-md p-4 w-full">
        <Image
          src={photo.imageUrl}
          alt={photo.title}
          width={1200}
          height={600}
          unoptimized
          className="w-full h-[450px] object-cover rounded-md"
        />

        <h1 className="text-3xl font-bold mt-5 leading-tight">{photo.title}</h1>

        <p className="text-md text-gray-500 mt-3">Prompt: {photo.prompt}</p>

        <div className="flex justify-between">
          <p className="text-sm text-gray-500 mt-3">
            Category: {photo.category}
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Create at: {photo.createdAt}
          </p>
        </div>

        <div className="flex items-center justify-between mt-2 text-gray-600 text-sm">
          <div className="flex items-center gap-1">❤️ {photo.likes}</div>
          <div className="h-4 w-px bg-gray-300"></div>
          <div className="flex items-center gap-1">⬇️ {photo.downloads}</div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {photo.tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link href="/all-photos">
          <button className="mt-6 bg-pink-600 text-white px-5 py-3 rounded">
            ← All Photos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PhotoDetails;
