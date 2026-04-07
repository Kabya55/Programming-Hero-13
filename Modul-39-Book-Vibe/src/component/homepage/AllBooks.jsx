import React, { use } from "react";
import BookUi from "./BookUi";
const booksPromis = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromis);
  return (
    <>
      <div className="container mx-auto mt-9">
        <h1 className="font-bold text-center text-4xl mb-9">Books</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <BookUi key={book.bookId} book={book}></BookUi>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllBooks;
