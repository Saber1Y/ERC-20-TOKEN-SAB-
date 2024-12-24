import type { NextPage } from "next";
import { Navbar, Hero, Service } from "../constants/index";

const Home: NextPage = () => {
  return (
    <section className="">
      <Navbar />
      <Hero />
      <Service />
    </section>
  );
};

export default Home;
