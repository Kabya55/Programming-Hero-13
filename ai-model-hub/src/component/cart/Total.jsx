import React from "react";
import { toast } from "react-toastify";

const Total = ({ selectedAI, setSelectedAi }) => {
  const total = selectedAI.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    toast.success("Item Proceed to Checkout");
    setSelectedAi([]); // 🔥 cart empty
  };

  return (
    <>
      <div className="w-11/12 max-w-5xl mx-auto bg-black text-white rounded-xl p-4 mb-9 flex items-center justify-between shadow-sm">
        <h1>Total</h1>
        <h2 className="text-xl font-bold">${total}</h2>
      </div>

      <div className="mt-6 w-11/12 max-w-5xl mx-auto mb-9">
        <button
          onClick={handleCheckout}
          className="btn rounded-xl p-4 bg-red-600 hover:bg-red-400 text-white btn-block"
        >
          Proceed to Checkout
        </button>
      </div>
    </>
  );
};

export default Total;
