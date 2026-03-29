import React from "react";

const SlectedCart = ({ selectedAis, handleRemove }) => {
  console.log(selectedAis);
  return (
    <>
      <div className="w-11/12 max-w-5xl mx-auto bg-gray-100 rounded-xl p-4 mb-9 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-300 rounded-md overflow-hidden">
            <img
              src={selectedAis?.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="font-semibold text-gray-800">
              {selectedAis?.title}
            </h2>
            <p className="text-sm text-gray-500">{selectedAis?.description}</p>
          </div>
        </div>

        <div>
          {selectedAis.price === 0 ? (
            <h1 className="font-bold text-2xl text-emerald-600">Free</h1>
          ) : (
            <h1 className="font-bold text-2xl">${selectedAis?.price}</h1>
          )}
          {selectedAis.price > 0 ? <p>per month</p> : ""}
        </div>

        <button
          onClick={() => handleRemove(selectedAis.id)} // 🔥 remove
          className="btn text-red-500 text-lg hover:text-red-600"
        >
          X
        </button>
      </div>
    </>
  );
};

export default SlectedCart;
