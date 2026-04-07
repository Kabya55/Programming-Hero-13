import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookUi = ({ book }) => {
  const { bookName, author, image, category, tags, rating, bookId } = book;

  return (
    <Link
      to={`/bookDetails/${bookId}`}
      className="w-[374px] h-[482px] bg-white border border-slate-200 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 flex flex-col mx-auto"
    >
      {/* Book Image Container */}
      <figure className="bg-[#f3f3f3] rounded-2xl py-6 mb-6 flex items-center justify-center h-[230px]">
        <img
          src={image}
          alt={bookName}
          className="h-full object-contain shadow-sm"
        />
      </figure>

      {/* Tags */}
      <div className="flex gap-3 mb-4">
        {tags &&
          tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#23be0a0d] text-[#23BE0A] px-4 py-1 rounded-full text-sm font-bold"
            >
              {tag}
            </span>
          ))}
      </div>

      {/* Book Info */}
      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-[#131313] mb-2 line-clamp-1">
          {bookName}
        </h2>
        <p className="text-[#131313cc] font-medium mb-4">By : {author}</p>
      </div>

      {/* Divider (Dashed) */}
      <div className="border-t border-dashed border-slate-200 my-4"></div>

      {/* Footer Info */}
      <div className="flex justify-between items-center text-[#131313cc] font-medium text-lg">
        <span>{category}</span>
        <div className="flex items-center gap-2">
          <span>{rating}</span>
          <FaRegStar className="text-xl" />
        </div>
      </div>
    </Link>
  );
};

export default BookUi;
