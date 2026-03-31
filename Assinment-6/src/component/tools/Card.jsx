import React from "react";
import SlectedItmsCard from "./SlectedItmsCard";
import Total from "./Total";
import { toast } from "react-toastify";

const Card = ({ slectedItms, setSlectedItms }) => {
  const handleRemove = (id) => {
    const updated = slectedItms.filter((item) => item.id !== id);
    setSlectedItms(updated);
    toast.warn("Item Remove");
  };
  return (
    <>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-8">Your Cart</h2>
        {slectedItms.length === 0 ? (
          <h1 className="text-2xl text-zinc-400 text-center mt-60 mb-60">
            Your cart is empty
          </h1>
        ) : (
          slectedItms.map((slectedItm) => {
            return (
              <SlectedItmsCard
                key={slectedItm.id}
                slectedItm={slectedItm}
                handleRemove={handleRemove}
              ></SlectedItmsCard>
            );
          })
        )}
      </div>
      {slectedItms.length > 0 && (
        <Total slectedItms={slectedItms} setSlectedItms={setSlectedItms} />
      )}
    </>
  );
};

export default Card;
