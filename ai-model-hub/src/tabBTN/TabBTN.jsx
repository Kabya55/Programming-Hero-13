import React, { use, useState } from "react";
import Modal from "../component/modal/Modal";
import Cart from "../component/cart/Cart";

const TabBTN = ({ getModal }) => {
  const modals = use(getModal);
  const [active, setActive] = useState("models");
  const [selectedAI, setSelectedAi] = useState([]);
  return (
    <>
      <div className="flex justify-center gap-6 mt-4 mb-8">
        <button
          onClick={() => setActive("models")}
          className={`px-10 py-2 rounded-full transition-all ${
            active === "models"
              ? "bg-gradient-to-r from-pink-500 to-red-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Models
        </button>

        <button
          onClick={() => setActive("cart")}
          className={`px-10 py-2 rounded-full transition-all ${
            active === "cart"
              ? "bg-gradient-to-r from-pink-500 to-red-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Cart ({selectedAI.length})
        </button>
      </div>
      {active == "models" && (
        <Modal
          modals={modals}
          setSelectedAi={setSelectedAi}
          selectedAI={selectedAI}
        ></Modal>
      )}
      {active == "cart" && (
        <Cart selectedAI={selectedAI} setSelectedAi={setSelectedAi}></Cart>
      )}
    </>
  );
};

export default TabBTN;
