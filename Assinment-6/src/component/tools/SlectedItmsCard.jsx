import React from "react";

const SlectedItmsCard = ({ slectedItm, handleRemove }) => {
  return (
    <>
      <div className="max-w-4xl mx-auto bg-white p-2 rounded-[40px] border border-slate-100 shadow-sm font-manrope">
        <div className="space-y-4 ">
          <div className="flex items-center justify-between bg-[#f8f9fb] rounded-3xl border border-slate-50 transition-all hover:shadow-md">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center p-3 shadow-sm">
                <img
                  src={slectedItm.icon}
                  alt="AI Writing Pro"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 leading-tight">
                  {slectedItm.name}
                </h4>
                <p className="text-slate-500 font-medium">
                  ${slectedItm.price}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(slectedItm.id)}
              className="btn btn-outline btn-error rounded-full"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlectedItmsCard;
