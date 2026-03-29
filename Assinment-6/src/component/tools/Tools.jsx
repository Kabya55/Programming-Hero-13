import React, { useState } from "react";
import Products from "./Products";
import Card from "./Card";

const Tools = () => {
  const [active, setActive] = useState("products");

  return (
    <div className="py-10 font-manrope">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-extrabold mb-4">Premium Digital Tools</h2>
        <p className="text-slate-500">
          Choose from our curated collection of premium digital products.
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 mb-12 bg-gray-100 w-fit mx-auto p-2 rounded-full">
        <button
          onClick={() => setActive("products")}
          className={`px-10 py-3 rounded-full font-bold transition-all duration-300 ${
            active === "products"
              ? "bg-gradient-to-r from-[#8b2cf5] to-[#7012f3] text-white shadow-lg"
              : "bg-transparent text-gray-500 hover:text-black"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setActive("card")}
          className={`px-10 py-3 rounded-full font-bold transition-all duration-300 ${
            active === "card"
              ? "bg-gradient-to-r from-[#8b2cf5] to-[#7012f3] text-white shadow-lg"
              : "bg-transparent text-gray-500 hover:text-black"
          }`}
        >
          Cart (0)
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {active === "products" ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Products />
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tools;
