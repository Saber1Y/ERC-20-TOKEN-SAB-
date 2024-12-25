import React from "react";
import robot from "../public/assets/robot.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-row justify-between items-center px-4 py-8"
    >
      <div className="container flex flex-row justify-between items-center flex-wrap gap-8">
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <Image
            src={robot}
            width={600}
            height={600}
            alt="robot"
            className="object-contain max-w-full h-[500px] mt-5 rounded-lg shadow-[0_2px_0_2px_#ac6aff]"
            data-animation="zoomIn"
            data-animaton-delay="0.2s"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <div className="title_default_light abouth4">
            <h1
              className="text-[40px] text-white font-bold mb-4 animation"
              data-animation-delay="0.2s"
              data-animtion="fadeInUp"
            >
              About BrainWave
            </h1>
            <p
              className="text-white font-bold text-[20px]"
              data-animation-delay="0.4s"
              data-animtion="fadeInUp"
            >
              SAB is a revolutionary digital asset designed to empower the next
              generation of decentralized applications and services. Built on a
              robust and scalable blockchain platform, SAB aims to become the
              cornerstone of a thriving ecosystem that fosters innovation,
              security, and user engagement. Whether you're an individual
              looking to access cutting-edge technology or a business seeking to
              leverage blockchain's transformative potential, SAB offers a
              versatile and powerful solution.
            </p>
            <p
              className="animation mt-4 text-white font-bold text-[20px]"
              data-animation-delay="0.8s"
              data-animtion="fadeInUp"
            >
              At the core of SAB is a commitment to driving the adoption of
              blockchain technology. Our mission is to create a seamless and
              user-friendly experience that bridges the gap between traditional
              systems and decentralized solutions. We envision a future where
              SAB is not just a token, but a catalyst for change, enabling new
              business models, enhancing transparency, and delivering real-world
              value to users around the globe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
