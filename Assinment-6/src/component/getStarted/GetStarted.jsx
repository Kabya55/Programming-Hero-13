import React from "react";
import User from "../../assets/Icon/user.png";
import Package from "../../assets/Icon/package.png";
import Rocket from "../../assets/Icon/rocket.png";

const GetStarted = () => {
  return (
    <>
      <div className=" py-20 px-4 font-manrope">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-slate-500">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-stretch justify-center">
          <div className="relative bg-white p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <div className="absolute top-6 right-6 bg-[#6d28d9] text-white text-[10px] font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-lg">
              01
            </div>

            <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6">
              <img className="w-11" src={User} alt="User" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Create Account
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          <div className="relative bg-white p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <div className="absolute top-6 right-6 bg-[#6d28d9] text-white text-[10px] font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-lg">
              02
            </div>
            <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6">
              <img className="w-11" src={Package} alt="Package" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Choose Products
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div className="relative bg-white p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <div className="absolute top-6 right-6 bg-[#6d28d9] text-white text-[10px] font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-lg">
              03
            </div>
            <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6">
              <img className="w-11" src={Rocket} alt="Rocket" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Start Creating
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
