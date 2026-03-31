import React, { useState } from "react";
import { toast } from "react-toastify";

const ProductCart = ({ data, slectedItms, setSlectedItms }) => {
  const [buyNow, setBuyNow] = useState(false);
  const BuyNowBTN = () => {
    if (!buyNow) {
      toast.success("Item added to cart!");
      setBuyNow(true);
    } else {
      toast.error("All rady Item added to cart!");
      return;
    }
    setBuyNow(true);
    setSlectedItms([...slectedItms, data]);
  };
  return (
    <>
      <div className="bg-white mt-11 p-8 rounded-3xl border border-slate-100 shadow-xl max-w-[380px] w-full mx-auto relative transform transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl font-manrope">
        <div
          className={`absolute top-6 right-6 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm capitalize ${
            data.tag === "popular"
              ? "bg-yellow-300 text-yellow-700"
              : data.tag === "new"
                ? "bg-blue-300 text-blue-700"
                : "bg-purple-300 text-purple-700"
          }`}
        >
          {data.tag}
        </div>

        <div className="mb-6 w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center p-4 border border-slate-100 shadow-inner">
          <img
            src={data.icon}
            alt={data.name}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-3xl font-extrabold text-[#0f172a] mb-3">
            {data.name}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            {data.description}.
          </p>
        </div>

        <div className="mb-8 flex items-baseline">
          <span className="text-5xl font-black text-slate-900">
            ${data.price}
          </span>
          <span className="text-lg ml-1 text-slate-400 font-medium">
            /{data.period}
          </span>
        </div>

        <ul className="space-y-4 mb-10 text-slate-600 flex-grow">
          {data.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <span className="text-green-500 w-5 h-5 mr-3">✓</span> {feature}
            </li>
          ))}
        </ul>

        <button
          onClick={BuyNowBTN}
          className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ease-in-out hover:shadow-lg active:scale-95 ${
            buyNow
              ? "bg-gray-300 text-gray-700 cursor-not-allowed"
              : "bg-[#8b2cf5] text-white hover:bg-[#6d28d9]"
          }`}
        >
          {buyNow ? "Added to Cart" : "Buy Now"}
        </button>
      </div>
    </>
  );
};

export default ProductCart;
