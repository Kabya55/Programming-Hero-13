import React, { use, useContext } from "react";
import { useParams } from "react-router";
import { BookContext } from "../../context/BookProvider";
const booksPromis = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
  const { id } = useParams();
  const books = use(booksPromis);
  const expectedBooks = books.find((book) => book.bookId == id);
  const {
    bookName,
    author,
    image,
    category,
    review,
    totalPages,
    tags,
    publisher,
    yearOfPublishing,
    rating,
  } = expectedBooks;

  const { handelMarkAsRead, storeBooks, setStoreBooks, handelWishlist } =
    useContext(BookContext);

  return (
    <>
      <div className=" container mx-auto w-full bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white p-8 rounded-xl shadow">
          {/* Left Image */}
          <div className="bg-gray-200 p-6 rounded-xl flex justify-center items-center">
            <img
              src={image}
              alt="Book"
              className="h-80 object-contain drop-shadow-xl"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-5">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {bookName}
            </h1>

            {/* Author */}
            <p className="text-gray-500">
              By : <span className="font-medium text-gray-700">{author}</span>
            </p>

            <hr />

            {/* Category */}
            <p className="text-gray-600 font-medium">{category}</p>

            <hr />

            {/* Review */}
            <p className="text-sm text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-800">Review :</span>{" "}
              {review}
            </p>

            {/* Tags */}
            <div className="flex items-center gap-3">
              <span className="font-medium">Tag</span>
              {tags &&
                tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#23be0a0d] text-[#23BE0A] px-4 py-1 rounded-full text-sm font-bold"
                  >
                    #{tag}
                  </span>
                ))}
            </div>

            <hr />

            {/* Info */}
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                Number of Pages :{" "}
                <span className="font-semibold">{totalPages}</span>
              </p>
              <p>
                Publisher : <span className="font-semibold">{publisher}</span>
              </p>
              <p>
                Year of Publishing :{" "}
                <span className="font-semibold">{yearOfPublishing}</span>
              </p>
              <p>
                Rating : <span className="font-semibold">{rating}</span>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                className="px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-200 transition"
                onClick={() => handelMarkAsRead(expectedBooks)}
              >
                Mark as Read
              </button>
              <button
                onClick={() => handelWishlist(expectedBooks)}
                className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
