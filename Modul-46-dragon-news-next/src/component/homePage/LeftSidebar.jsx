import React from "react";
import Link from "next/link";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <>
      <div className="mr-9">
        <h2 className="text-xl font-bold mb-4">All Category</h2>

        <ul className="space-y-2">
          {categories.map((category) => {
            return (
              <li
                key={category.category_id}
                className={`${
                  activeId === category.category_id
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200"
                } hover:bg-gray-400 p-2 rounded`}
              >
                <Link
                  href={`/category/${category.category_id}`}
                  className="block"
                >
                  {category.category_name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default LeftSidebar;
