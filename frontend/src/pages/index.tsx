import type { NextPage } from "next";
import {
  Navbar,
  Hero,
  Service,
  About,
  Footer,
  Token,
} from "../constants/index";

const Home: NextPage = () => {
  return (
    <section className="bg-[#0d0d27]">
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Token  />
      <Footer />
    </section>
  );
};

export default Home;
