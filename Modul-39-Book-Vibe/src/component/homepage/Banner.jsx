import React from "react";
import img from "../../assets/hero_img.png";

const Banner = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen container mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold mb-8">
              Books to freshen up <br /> your bookshelf
            </h1>
            <button className="btn btn-info text-white">View The List</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
