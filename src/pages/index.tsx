import type { NextPage } from "next";
import { Navbar, Hero, Service, About } from "../constants/index";

const Home: NextPage = () => {
  return (
    <section className="bg-[#0d0d27]">
      <Navbar />
      <Hero />
      <Service />
      <About />
    </section>
  );
};

export default Home;
