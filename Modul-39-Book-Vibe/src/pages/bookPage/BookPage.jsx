import React, { useContext, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BookUi from "./../../component/homepage/BookUi";
import ReadBooks from "../../ui/ReadBooks";
import WishlistBooks from "../../ui/WishlistBooks";

const BookPage = () => {
  const { storeBooks, wishlist } = useContext(BookContext);
  const [sortingType, setSortingType] = useState("");

  return (
    <>
      <div className="container mx-auto flex justify-center mt-9 mb-15">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            Short by {sortingType} ⬇️
          </div>
          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortingType("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => setSortingType("Rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-9">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            {storeBooks.length === 0 ? (
              <div className="text-center py-20 bg-gray-100 rounded-xl">
                <h2 className="text-xl font-semibold text-gray-600">
                  No Read Books Found 📚
                </h2>
              </div>
            ) : (
              <ReadBooks sortingType={sortingType}></ReadBooks>
            )}
          </TabPanel>
          <TabPanel>
            {wishlist.length === 0 ? (
              <div className="text-center py-20 bg-gray-100 rounded-xl">
                <h2 className="text-xl font-semibold text-gray-600">
                  No Wishlist Books Found 💔
                </h2>
              </div>
            ) : (
              <WishlistBooks sortingType={sortingType}></WishlistBooks>
            )}
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default BookPage;
