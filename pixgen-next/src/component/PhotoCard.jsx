import Image from "next/image";
import Link from "next/link";
import React from "react";

const PhotoCard = ({ photo }) => {
  return (
    <>
      <div className="rounded-2xl p-4 bg-white/40 backdrop-blur-lg border border-gray-200 shadow-md hover:scale-105 transition duration-300">
        {/* Image */}
        <div className="relative w-full aspect-square">
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-xl w-full h-60 object-cover"
          />

          {/* Category Badge */}
          <span className="absolute top-3 right-3 bg-white/80 text-xs px-3 py-1 rounded-full shadow">
            {photo.category}
          </span>
        </div>

        {/* Content */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-800">{photo.title}</h2>

          {/* Stats */}
          <div className="flex items-center justify-between mt-2 text-gray-600 text-sm">
            <div className="flex items-center gap-1">❤️ {photo.likes}</div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex items-center gap-1">⬇️ {photo.downloads}</div>
          </div>

          {/* Button */}
          <Link href={`/all-photos/${photo.id}`} className="mt-4 block">
            <button className="mt-4 w-full py-2 rounded-full border border-gray-300 bg-white/50 backdrop-blur-md hover:bg-gray-700/70 hover:text-white transition">
              View
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PhotoCard;
