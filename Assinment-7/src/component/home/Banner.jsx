import React from "react";

const Banner = () => {
  return (
    <>
      <div className=" bg-[#f8fafc] pt-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[40px] font-bold text-[#1e293b] mb-4">
            Friends to keep close in your life
          </h1>
          <p className="text-[#64748b] text-lg max-w-xl mx-auto leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <button className="mt-8 bg-[#244D3F] hover:bg-[#538c7b] text-white px-6 py-2 rounded-md flex items-center gap-2 mx-auto font-medium transition-all">
            <span className="text-xl">+</span> Add a Friend
          </button>
        </div>

        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 text-center">
            <h2 className="text-4xl font-bold text-[#1e293b] mb-2">10</h2>
            <p className="text-[#64748b] font-medium">Total Friends</p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 text-center">
            <h2 className="text-4xl font-bold text-[#1e293b] mb-2">3</h2>
            <p className="text-[#64748b] font-medium">On Track</p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 text-center">
            <h2 className="text-4xl font-bold text-[#1e293b] mb-2">6</h2>
            <p className="text-[#64748b] font-medium">Need Attention</p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 text-center">
            <h2 className="text-4xl font-bold text-[#1e293b] mb-2">12</h2>
            <p className="text-[#64748b] font-medium">
              Interactions This Month
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-16 border-t border-gray-200"></div>
      </div>
    </>
  );
};

export default Banner;
