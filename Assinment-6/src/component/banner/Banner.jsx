import React from "react";
import BannerImg from "../../assets/Icon/banner.png";
import Dot from "../../assets/Icon/dot.png";
import Play from "../../assets/Icon/Play.png";

const Banner = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-10/12  mx-auto mt-20 gap-10 items-center ">
        <div className="space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF]  text-[#4F39F6] text-[16px] font-medium px-5 py-2 rounded-full">
            <img src={Dot} alt="Dot " /> New: AI-Powered Tools Available
          </div>
          <h1 className="text-6xl lg:text-7xl font-extrabold ">
            Supercharge Your <br />
            <span className="mt-5">Digital Workflow</span>
          </h1>
          <p className="text-lg text-zinc-700 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn btn-primary rounded-full">
              Explore Products
            </button>
            <button className="btn btn-outline btn-primary rounded-full">
              <img src={Play} alt="" />
              Watch Demo
            </button>
          </div>
        </div>
        <div>
          <div className="flex justify-center lg:justify-end">
            <img
              className="h-[500px] w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImg}
              alt="Banner Img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
