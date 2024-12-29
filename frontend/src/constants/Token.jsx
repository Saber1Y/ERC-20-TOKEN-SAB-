"use client";
import React, { useState, useEffect } from "react";
import { useWriteContract, useAccount, useReadContract } from "wagmi";

const Token = ({ contractAddress, abi }) => {
  const [totalSupply, setTotalSupply] = useState(0);
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const { isConnected } = useAccount();

  const { writeContractAsync: mintToken } = useWriteContract();

  const { data, refetch } = useReadContract({
    address: contractAddress,
    abi: abi,
    functionName: "getTotalSupply",
    args: [],
  });

  const handleTokenMint = async () => {
    if (!isConnected) {
      alert("Please connect your wallet to mint tokens");
      return;
    }

    try {
      await mintToken({
        address: contractAddress,
        abi: abi,
        functionName: "mint",
        args: [address, amount],
      });
      alert("Token minted successfully");
    } catch (error) {
      alert("An error occurred while minting token");
      console.error("error", error.message);
    }
  };

  useEffect(() => {
    if (data) {
      setTotalSupply(Number(data)); // Convert BigNumber to a regular number
    }
  }, [data]);

  return (
    <section
      id="token"
      className="relative bg-cover bg-fixed"
      style={{ backgroundImage: "url('/assets/images/token_bg.png')" }}
    >
      <div className="mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h4 className="text-3xl font-bold text-white mb-4">SAB Token Sale</h4>
          <p className="text-gray-300 text-[20px] font-semibold">
            Don't miss your chance to be an early adopter of SAB! Secure your
            tokens during our ICO presale at a special discounted rate.
          </p>
        </div>

        <div className="flex flex-col md:flex-row p-8 justify-between gap-8 items-center">
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
              <p className="text-gray-300">1 ETH = 1 $SAB</p>
            </div>
          </div>
          {/* Token Purchase Section */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-[80%] md:w-[40%]">
            <h3 className="text-2xl font-bold text-white mb-4">
              Mint SAB Tokens
            </h3>
            <div className="mb-4">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Recipient Address"
                className="w-full p-3 rounded border-2 border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount to Mint"
                min="1"
                className="w-full p-3 rounded border-2 border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mt-6">
              <button
                onClick={handleTokenMint}
                className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
              >
                Mint Tokens
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
              <p className="text-gray-300">{totalSupply}</p>
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
