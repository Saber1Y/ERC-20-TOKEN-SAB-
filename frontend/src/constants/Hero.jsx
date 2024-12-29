import React from "react";
import service from "../public/assets/service.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      data-aos="fade-up"
      className="flex flex-row items-center justify-between p-8  bg-[#0d0d27]  flex-wrap"
    >
      <div className=" flex flex-col p-10">
        <h1
          className="text-[30px] md:text-[60px] text-white font-bold  leading-tight"
          data-animation="fadeInUp"
          data-animation-delay="1.1s"
        >
          Welcome to the Future <br /> of Web3 with $SAB <br /> Token.
        </h1>
        <h5
          className="text-white font-bold text-xl my-2"
          data-animation="fadeInUp"
          data-animation-delay="1.1s"
        >
          Presale is live
        </h5>

        <div
          className="flex flex-col md:flex-row gap-4 mt-6 min-w-5"
          data-animation="fadeInUp"
          data-animation-delay="1.3s"
        >
          <button
            href=""
            className="px-4 text-sm py-4 bg-[#ac6aff] text-white font-medium border-0 rounded-md font-sans text-center transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#ac6aff] focus:ring-offset-2"
          >
            Whitepaper
          </button>

          <a
            href="#token"
            className="px-4 py-4 text-sm bg-white text-black font-medium border-0 rounded-md font-sans text-center transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Mint Token
          </a>
        </div>
      </div>

      <div className="">
        <Image
          src={service}
          className="object-contain max-w-full h-[500px] mt-20 rounded-lg shadow-[0_2px_0_2px_#ac6aff]"
          data-animation="fadeInUp"
          data-animation-delay="1.1s"
          width={500}
          alt="SabToken"
        />
      </div>
    </section>
  );
};

export default Hero;
