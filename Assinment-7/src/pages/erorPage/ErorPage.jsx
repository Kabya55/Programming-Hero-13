import React from "react";
import { useNavigate } from "react-router";

const ErorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 font-manrope">
      <div className="text-center">
        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#244D3F] to-[#112921] animate-bounce">
          404
        </h1>

        <div className="relative mb-8">
          <div className="w-24 h-1 bg-[#244D3F] mx-auto rounded-full opacity-20 blur-sm"></div>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-slate-500 max-w-md mx-auto mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="px-8 py-4 bg-[#244D3F] text-white font-bold rounded-2xl shadow-lg shadow-purple-200 hover:bg-[#58a189] hover:-translate-y-1 transition-all duration-300 active:scale-95 w-full sm:w-auto"
          >
            Back to Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-8 py-4 border-2 border-slate-100 text-slate-600 font-bold rounded-2xl hover:bg-[#244D3F] hover:text-white transition-all duration-300 w-full sm:w-auto"
          >
            Go Previous
          </button>
        </div>

        <div className="mt-16 opacity-20">
          <img
            src="https://img.icons8.com/bubbles/200/search-property.png"
            alt="Error Illustration"
            className="mx-auto w-32 h-32"
          />
        </div>
      </div>
    </div>
  );
};

export default ErorPage;
