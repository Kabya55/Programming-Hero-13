import React from "react";

const Rating = () => {
  return (
    <>
      <div className="w-full mt-16 mb-32 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-white">
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold">50K+</h1>
              <p className="text-lg opacity-80">Active Users</p>
            </div>

            <div className="hidden md:block border-l border-white/30 h-16"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold">200K+</h1>
              <p className="text-lg opacity-80">Premium Tools</p>
            </div>

            <div className="hidden md:block border-l border-white/30 h-16"></div>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold">4.9</h1>
            <p className="text-lg opacity-80">Rating</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rating;
