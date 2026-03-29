import React, { useState } from "react";
import { toast } from "react-toastify";

const Products = () => {
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
  };
  return (
    <>
      <div className="bg-white mt-11 p-8 rounded-3xl border border-slate-100 shadow-xl max-w-[380px] w-full mx-auto relative transform transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl font-manrope">
        <div className="absolute top-6 right-6 bg-[#fef9c3] text-[#854d0e] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
          Best Seller
        </div>

        <div className="mb-6 w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center p-4 border border-slate-100 shadow-inner">
          <img
            src="https://img.icons8.com/color/96/doc-and-pen.png"
            alt="document and pen icon"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-3xl font-extrabold text-[#0f172a] mb-3">
            AI Writing Pro
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Generate high-quality content, blogs, and marketing copy in seconds
            with advanced AI.
          </p>
        </div>

        <div className="mb-8 flex items-baseline">
          <span className="text-5xl font-black text-slate-900">$29</span>
          <span className="text-lg ml-1 text-slate-400 font-medium">/Mo</span>
        </div>

        <ul className="space-y-4 mb-10 text-slate-600">
          <li className="flex items-center text-sm">
            <svg
              className="w-5 h-5 mr-3 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Unlimited AI generations
          </li>
          <li className="flex items-center text-sm">
            <svg
              className="w-5 h-5 mr-3 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            50+ writing templates
          </li>
          <li className="flex items-center text-sm">
            <svg
              className="w-5 h-5 mr-3 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Grammar checker
          </li>
        </ul>

        <button
          onClick={BuyNowBTN}
          className="w-full py-4 rounded-xl font-bold bg-[#8b2cf5] text-white transition-all duration-300 ease-in-out hover:bg-[#6d28d9] hover:shadow-lg active:scale-95"
        >
          {buyNow ? "Added to Cart" : "Buy Now"}
        </button>
      </div>
    </>
  );
};

export default Products;
