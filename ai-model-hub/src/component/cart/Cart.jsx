import React from "react";
import SlectedCart from "./SlectedCart";
import Total from "./Total";
import { toast } from "react-toastify";

const Cart = ({ selectedAI, setSelectedAi }) => {
  const handleRemove = (id) => {
    const updated = selectedAI.filter((item) => item.id !== id);
    setSelectedAi(updated);
    toast.success("Item Remove");
  };
  return (
    <>
      <div className="space-y-4">
        {selectedAI.length === 0 ? (
          <h1 className="text-2xl text-zinc-400 text-center mt-60 mb-60">
            Your cart is empty
          </h1>
        ) : (
          selectedAI.map((selectedAis) => (
            <SlectedCart
              key={selectedAis.id}
              selectedAis={selectedAis}
              handleRemove={handleRemove} // 🔥 pass
            />
          ))
        )}
      </div>
      {selectedAI.length > 0 && (
        <Total selectedAI={selectedAI} setSelectedAi={setSelectedAi} />
      )}
    </>
  );
};

export default Cart;
