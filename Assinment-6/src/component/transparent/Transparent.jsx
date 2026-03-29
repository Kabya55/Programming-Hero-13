import React from "react";

const Transparent = () => {
  return (
    <>
      <div className="bg-[#f8fafc] pb-32 px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-[#0f172a] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-500 text-[16px]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-stretch justify-center">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm w-full flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">
                Starter
              </h3>
              <p className="text-sm text-slate-500">
                Perfect for getting started
              </p>
            </div>
            <div className="mb-8 flex items-baseline">
              <span className="text-5xl font-black text-slate-900">$0</span>
              <span className="text-lg ml-1 text-slate-400">/Month</span>
            </div>
            <ul className="space-y-4 mb-10 text-slate-600 flex-grow">
              <li className="flex items-center text-sm">
                <span className="text-green-500 mr-3 font-bold">✓</span> Access
                to 10 free tools
              </li>
              <li className="flex items-center text-sm">
                <span className="text-green-500 mr-3 font-bold">✓</span> Basic
                templates
              </li>
              <li className="flex items-center text-sm">
                <span className="text-green-500 mr-3 font-bold">✓</span>{" "}
                Community support
              </li>
              <li className="flex items-center text-sm">
                <span className="text-green-500 mr-3 font-bold">✓</span> 1
                project per month
              </li>
            </ul>
            <button className="w-full py-4 rounded-full font-bold bg-gradient-to-r from-[#6d28d9] to-[#9333ea] text-white hover:opacity-90 transition-all">
              Get Started Free
            </button>
          </div>

          <div className="relative bg-gradient-to-b from-[#8b2cf5] to-[#7012f3] p-8 rounded-2xl text-white shadow-2xl w-full scale-105 z-10 flex flex-col">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fef9c3] text-[#854d0e] text-[10px] uppercase tracking-wider font-bold px-4 py-1 rounded-full shadow-sm">
              Most Popular
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-1">Pro</h3>
              <p className="text-sm text-purple-100">Best for professionals</p>
            </div>
            <div className="mb-8 flex items-baseline">
              <span className="text-5xl font-black">$29</span>
              <span className="text-lg ml-1 text-purple-200">/Month</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center text-sm">
                <span>✓</span> Access to all premium tools
              </li>
              <li className="flex items-center text-sm">
                <span>✓</span> Unlimited templates
              </li>
              <li className="flex items-center text-sm">
                <span>✓</span> Priority support
              </li>
              <li className="flex items-center text-sm">
                <span>✓</span> Unlimited projects
              </li>
              <li className="flex items-center text-sm">
                <span>✓</span> Cloud sync
              </li>
              <li className="flex items-center text-sm">
                <span>✓</span> Advanced analytics
              </li>
            </ul>
            <button className="w-full py-4 rounded-full font-bold bg-white text-[#7012f3] hover:bg-slate-50 transition-all">
              Start Pro Trial
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm w-full flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">
                Enterprise
              </h3>
              <p className="text-sm text-slate-500">For teams and businesses</p>
            </div>
            <div className="mb-8 flex items-baseline">
              <span className="text-5xl font-black text-slate-900">$99</span>
              <span className="text-lg ml-1 text-slate-400">/Month</span>
            </div>
            <ul className="space-y-4 mb-10 text-slate-600 flex-grow">
              <li className="flex items-center text-sm">
                <span className="text-green-500 mr-3 font-bold">✓</span>{" "}
                Everything in Pro
              </li>
              <li className="flex items-center text-sm">
                <span className="text-green-500 mr-3 font-bold">✓</span> Team
                collaboration
              </li>
              <li className="flex items-center text-sm">
                <span className="text-green-500 mr-3 font-bold">✓</span> Custom
                integrations
              </li>
              <li className="flex items-center text-sm">
                <span className="text-green-500 mr-3 font-bold">✓</span>{" "}
                Dedicated support
              </li>
              <li className="flex items-center text-sm">
                <span className="text-green-500 mr-3 font-bold">✓</span> SLA
                guarantee
              </li>
              <li className="flex items-center text-sm">
                <span className="text-green-500 mr-3 font-bold">✓</span> Custom
                branding
              </li>
            </ul>
            <button className="w-full py-4 rounded-full font-bold bg-gradient-to-r from-[#6d28d9] to-[#9333ea] text-white hover:opacity-90 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transparent;
