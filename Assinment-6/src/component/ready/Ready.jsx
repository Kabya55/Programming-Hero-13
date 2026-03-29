import React from "react";

const Ready = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 py-20 text-center text-white">
        {/* Content */}
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <h1 className="text-4xl font-extrabold mb-6">
            Ready To Transform Your Workflow?
          </h1>

          {/* Description */}
          <p className="text-[16px] opacity-80 mb-8">
            Join thousands of professionals who are already using Digitools to
            work smarter.
            <br />
            Start your free trial today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            {/* Primary Button */}
            <button className="bg-white text-purple-600 font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition">
              Explore Products
            </button>

            {/* Outline Button */}
            <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-purple-600 transition">
              View Pricing
            </button>
          </div>

          {/* Footer Text */}
          <p className="text-[16px] opacity-70">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </>
  );
};

export default Ready;
