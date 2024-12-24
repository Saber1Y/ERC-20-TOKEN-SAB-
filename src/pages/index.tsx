import type { NextPage } from "next";
import { Navbar, Hero } from "../constants/index";

const Home: NextPage = () => {
  return (
    <section className="">
      <Navbar />
      <Hero />
    </section>
  );
};

export default Home;
