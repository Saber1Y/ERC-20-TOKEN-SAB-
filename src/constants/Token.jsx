"use client";
import React, { useState } from "react";

const Token = () => {
  const [nToken, setnToken] = useState(1);

  return (
    <section
      id="token"
      className="relative  bg-cover bg-fixed"
      style={{ backgroundImage: "url('/assets/images/token_bg.png')" }}
    >
      <div className="  mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h4 className="text-3xl font-bold text-white mb-4">SAB Token Sale</h4>
          <p className="text-gray-300 text-[20px] font-semibold">
            Don't miss your chance to be an early adopter of SAB! Secure your
            tokens during our ICO presale at a special discounted rate.
          </p>
        </div>

        <div className="flex flex-col md:flex-row p-8  justify-between gap-8 items-center">
          {/* Start Time, End Time, and Exchange Rate */}
          <div className="space-y-8" data-aos="fade-down">
            <div>
              <h3 className="text-xl font-bold text-white">Start Time</h3>
              <p className="text-gray-300">26th, December 2024</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Ending Time</h3>
              <p className="text-gray-300">February 20 2025</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Token Exchange Rate
              </h3>
              <p className="text-gray-300">0.2 ETH = 1 SAB</p>
            </div>
          </div>

          {/* Token Purchase Section */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-[80%] md:w-[40%]">
            <div>
              <input
                type="number"
                required
                placeholder="1"
                min="1"
                className="w-full p-3 rounded border-2 border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring focus:ring-blue-500"
                onChange={(e) => setnToken(e.target.value)}
                value={nToken}
              />
            </div>
            <div className="mt-6">
              <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
                Buy Token
              </button>
            </div>
          </div>

          {/* Market Info */}
          <div className="space-y-8" data-aos="fade-down">
            <div>
              <h3 className="text-xl font-bold text-white">
                Low - High 24 hrs
              </h3>
              <p className="text-gray-300">$2437</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Total Token Sold</h3>
              <p className="text-gray-300">Coming Soon</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Acceptable Currency
              </h3>
              <p className="text-gray-300">ETHEREUM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;
