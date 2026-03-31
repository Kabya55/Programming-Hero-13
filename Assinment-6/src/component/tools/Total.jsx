import React from "react";
import { toast } from "react-toastify";

const Total = ({ slectedItms, setSlectedItms }) => {
  const totalPrice = slectedItms.reduce((total, item) => {
    return total + item.price;
  }, 0);
  const handleCheckout = () => {
    toast.success("Item Proceed to Checkout");
    setSlectedItms([]); // 🔥 cart empty
  };
  return (
    <>
      <div className="flex justify-between items-center mb-8 mt-8 px-5">
        <span className="font-medium">Total:</span>
        <span className="text-3xl font-bold">${totalPrice}</span>
      </div>

      <button
        onClick={handleCheckout}
        className="w-full py-5 rounded-2xl font-bold bg-[#7012f3] text-white text-lg transition-all duration-300 hover:bg-[#5b0ec7] hover:shadow-xl hover:shadow-purple-100 active:scale-[0.98]"
      >
        Proceed To Checkout
      </button>
    </>
  );
};

export default Total;
