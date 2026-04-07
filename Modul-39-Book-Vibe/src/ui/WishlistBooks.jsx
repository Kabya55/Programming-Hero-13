import React, { useContext } from "react";
import { BookContext } from "../context/BookProvider";

const WishlistBooks = ({ sortingType }) => {
  const { wishlist } = useContext(BookContext);

  let wishlisted = [...wishlist];

  if (sortingType === "pages") {
    wishlisted.sort((a, b) => a.totalPages - b.totalPages);
  } else if (sortingType === "Rating") {
    wishlisted.sort((a, b) => a.rating - b.rating);
  }

  return (
    <div className="space-y-5">
      {wishlisted.map((book) => {
        const {
          bookId,
          bookName,
          author,
          image,
          category,
          rating,
          tags,
          publisher,
          totalPages,
          yearOfPublishing,
        } = book;

        return (
          <div
            key={bookId}
            className="border rounded-2xl p-5 flex gap-6 items-center bg-gray-50 hover:shadow-md transition"
          >
            {/* Left Image */}
            <div className="bg-gray-200 p-4 rounded-xl w-32 h-40 flex items-center justify-center">
              <img
                src={image}
                alt={bookName}
                className="h-full object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="flex-1 space-y-2">
              <h2 className="text-xl font-bold text-gray-800">{bookName}</h2>

              <p className="text-gray-500 text-sm">
                By : <span className="font-medium">{author}</span>
              </p>

              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="font-semibold">Tag</span>

                {tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-green-100 text-green-600 px-3 py-1 rounded-full font-semibold"
                  >
                    #{tag}
                  </span>
                ))}

                <span className="text-gray-500 ml-3">
                  📍 Year: {yearOfPublishing}
                </span>
              </div>

              <div className="flex gap-6 text-sm text-gray-500">
                <p>👤 Publisher: {publisher}</p>
                <p>📄 Page {totalPages}</p>
              </div>

              <hr />

              <div className="flex items-center gap-3 flex-wrap">
                <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">
                  Category: {category}
                </span>

                <span className="bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm">
                  Rating: {rating}
                </span>

                <button className="bg-green-500 text-white px-5 py-2 rounded-full text-sm">
                  View Details
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WishlistBooks;
