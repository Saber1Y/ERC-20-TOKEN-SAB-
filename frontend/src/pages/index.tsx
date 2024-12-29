import type { NextPage } from "next";
import {
  Navbar,
  Hero,
  Service,
  About,
  Footer,
  Token,
} from "../constants/index";
import SabContract from "../Data/SAB.json";
import TokenSoldNotification from "../components/TokenSoldNotification";

const Home: NextPage = () => {
  const contractAddress = "0x8464135c8F25Da09e49BC8782676a84730C318bC";
  const abi = SabContract.abi;
  return (
    <section className="bg-[#0d0d27]">
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Token contractAddress={contractAddress} abi={abi} />
      <div className="bg-gray-800  text-white flex items-center justify-center">
        <TokenSoldNotification />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
