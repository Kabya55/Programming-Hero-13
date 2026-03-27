import React from "react";
import bannerBg from "../../assets/bg-shadow.png";
import bannerMain from "../../assets/banner-main.png";

const Banner = () => {
  return (
    <div
      className="w-11/12 m-auto mt-6 bg-cover bg-center flex items-center justify-center rounded-2xl"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="text-center p-1">
        <img
          className="max-w-[248px] mx-auto mt-[64px]"
          src={bannerMain}
          alt="banner-main"
        />
        <h1 className=" text-[40px]  font-bold  text-white mt-[24px]">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className=" text-[24px] font-medium mt-[16px]  text-[#FFFFFF]/30">
          Beyond Boundaries Beyond Limits
        </p>
        <button className="btn btn-outline btn-warning mt-[24px] mb-[64px]">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
