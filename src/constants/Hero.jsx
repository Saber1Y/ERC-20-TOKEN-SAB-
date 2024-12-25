import React from "react";
import service from "../public/assets/service.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section data-aos="fade-up" className="flex flex-row items-center justify-between p-8  bg-[#0d0d27]  flex-wrap">
      <div className="max-w-1/2 p-10">
        <h1
          className="text-[60px] text-white font-bold  leading-tight"
          data-animation="fadeInUp"
          data-animation-delay="1.1s"
        >
          Welcome to the Future <br /> of Web3 with SAB <br /> Token.
        </h1>
        <h5
          className="text-white font-bold text-xl my-2"
          data-animation="fadeInUp"
          data-animation-delay="1.1s"
        >
          Presale is live
        </h5>
        <div
          className="flex space-x-4 mt-6"
          data-animation="fadeInUp"
          data-animation-delay="1.3s"
        >
          <a
            href="#whitepaper"
            className="px-6 py-4 bg-[#ac6aff] text-white font-medium border-0 rounded-md font-sans"
          >
            Whitepaper
          </a>
          <a
            href="#token"
            className="px-6 py-4 bg-white text-black font-medium border-0 rounded-md font-sans"
          >
            Transfer Token
          </a>
        </div>
      </div>
      <div className="">
        <Image
          src={service}
          height={600}
          className="object-contain max-w-full h-[500px] mt-5 rounded-lg shadow-[0_2px_0_2px_#ac6aff]"
          data-animation="fadeInUp"
          data-animation-delay="1.1s"
          width={600}
          alt="SabToken"
        />
      </div>
    </section>
  );
};

export default Hero;
