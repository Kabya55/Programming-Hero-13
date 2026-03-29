import React, { useState } from "react";
import { toast } from "react-toastify";

const ModalCard = ({ modal, setSelectedAi, selectedAI }) => {
  const [subscribe, setSubscribe] = useState(false);
  const SubscribeBTN = () => {
    setSubscribe(true);
    if (!subscribe) {
      toast.success("Item added to cart!");
      setSubscribe(true);
    } else {
      toast.error("All rady Item added to cart!");
      return;
    }
    setSelectedAi([...selectedAI, modal]);
  };
  return (
    <>
      <div className="card w-96 shadow-sm group">
        <figure className="shadow-lg bg-zinc-300 pt-2 pb-2 overflow-hidden">
          <div>
            <img
              className="h-40 w-40 object-contain transition-transform duration-500 group-hover:scale-110"
              src={modal.image}
              alt={modal.title}
            />
          </div>
        </figure>

        <div className="card-body">
          <h2 className="card-title">{modal.title}</h2>
          <p>{modal.description}</p>

          {modal.price === 0 ? (
            <h1 className="font-bold text-2xl text-emerald-600">Free</h1>
          ) : (
            <div className="flex items-baseline gap-1 mb-6">
              <span className="font-bold text-2xl">${modal.price}</span>
              <span>/Month</span>
            </div>
          )}

          <div className="mt-6">
            <button
              className="btn bg-red-600 hover:bg-red-400 text-white btn-block"
              onClick={() => SubscribeBTN()}
            >
              {subscribe ? "Subscribe" : "Subscribe Now"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCard;
