import Image from "next/image";
import Link from "next/link";
import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";

const HomeManeContent = ({ news }) => {
  return (
    <div className="space-y-6">
      {news.length > 0 ? (
        news.map((item) => (
          <div
            key={item._id}
            className="max-w-xl mx-auto bg-white rounded-lg border overflow-hidden shadow-sm"
          >
            {/* Header */}
            <div className="bg-gray-100 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={item.author?.img}
                  alt={item.author?.name || "author image"}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-gray-800">
                    {item.author?.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.author?.published_date}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 text-gray-500 text-lg">
                <FaRegBookmark className="cursor-pointer" />
                <FaShareAlt className="cursor-pointer" />
              </div>
            </div>

            {/* Body */}
            <div className="p-5 space-y-4">
              <h2 className="text-2xl font-bold leading-tight text-gray-800">
                {item.title}
              </h2>

              <Image
                src={item.image_url}
                alt={item.title || "news image"}
                width={600}
                height={300}
                unoptimized
                className="w-full h-72 object-cover rounded-md"
              />

              <p className="text-gray-500 leading-7">
                {item.details.slice(0, 180)}...
                <span className="text-orange-500 font-semibold cursor-pointer ml-1">
                  Read More
                </span>
              </p>

              {/* Footer */}
              <div className="border-t pt-4 flex items-center justify-between">
                <div className="flex items-center gap-1 text-orange-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                  <span className="text-gray-600 ml-2 font-medium">
                    {item.rating?.number}
                  </span>

                  <div className="flex items-center gap-2 text-gray-500">
                    <FaEye className="ml-3" />
                    <span>{item.total_view}</span>
                  </div>
                </div>

                <Link href={`/news/${item._id}`}>
                  <button className="btn bg-[#403F3F] hover:bg-gray-500 text-white">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-xl font-semibold pt-3 text-gray-500">
          No news found for this category.
        </p>
      )}
    </div>
  );
};

export default HomeManeContent;
