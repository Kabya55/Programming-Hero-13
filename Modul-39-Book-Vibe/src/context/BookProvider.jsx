import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storeBooks, setStoreBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handelMarkAsRead = (currentBook) => {
    const isExistBook = storeBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.warn("Alradi in Book!");
    } else {
      setStoreBooks([...storeBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added to list `);
    }
  };

  const handelWishlist = (currentBook) => {
    const isExistReadList = storeBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistReadList) {
      toast.error("Alradi in Book!");
      return;
    }

    const isExistBook = wishlist.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.warn("Alradi in Wishlist!");
    } else {
      setWishlist([...wishlist, currentBook]);
      toast.success(`${currentBook.bookName} is added to Wishlist! `);
    }
  };

  const data = {
    storeBooks,
    setStoreBooks,
    handelMarkAsRead,
    handelWishlist,
    wishlist,
    setWishlist,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
