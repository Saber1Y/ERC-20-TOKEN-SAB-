import React from "react";

const Service = () => {
  const services = [
    {
      title: "Strong Growth Potential",
      description:
        "The MTK token is strategically positioned within a rapidly growing market, offering investors the potential for significant appreciation in value. By being early-bird investor, you can capitalize on the growth opportunities.",
    },
    {
      title: "Early Access and Discounts",
      description:
        "Participating in the MTK ICO presale grants you early access to tokens at a special rate. This early-bird opportunity allows you to secure your position before the token is listed on major exchanges, where prices may be higher due to market demand.",
    },
    {
      title: "Versatile Utility within the Ecosystem",
      description:
        "MTK tokens are not just an investment; they are the backbone of our ecosystem. Whether you’re looking to pay for transaction fees or participate in governance decisions, MTK serves as the key to unlocking these features.",
    },
    {
      title: "Staking Rewards for Passive Income",
      description:
        "By staking your MTK tokens within our ecosystem, you can earn attractive rewards. Staking provides a way to earn passive income while contributing to the security and stability of our network. The more tokens you stake, the greater your potential rewards.",
    },
    {
      title: "Exclusive Access to Premium Features",
      description:
        "Holding MTK tokens gives you access to a range of exclusive benefits, including premium features, products, and services that are only available to token holders. This includes early access to new platform developments, special events.",
    },
    {
      title: "Community-Driven Governance",
      description:
        "MTK token holders are not just passive investors; they are active participants in shaping the future of the project. Through a decentralized governance model, holders can propose and vote on key decisions, ensuring that the community’s voice is heard.",
    },
  ];
  return (
    <section id="service" className="py-12 bg-[#0d0d27] ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <div className="lg:w-2/3 w-full text-center">
            <div className="border-b-2 border-gray-300 pb-4">
              <h1
                className="text-5xl text-white font-bold mb-4 animate-fadeInUp"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Benefits of SAB Token
              </h1>
              <p
                className="text-white font-bold text-[18px]"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Fast and Secure: Enjoy quick and secure transactions with
                blockchain-backed technology. Transparent System: Our platform
                ensures complete transparency in pricing and transactions.
                Community-Centric: Stay connected and grow with a vibrant
                community of like-minded users. Future-Ready: Be part of an
                ever-evolving ecosystem designed for long-term success. 24/7
                Accessibility: Always accessible, empowering you to manage
                tokens anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i + 1}
              className="bg-white shadow-md rounded-lg p-6 text-center"
              data-aos="fade-up"
              data-aos-delay={`${i * 100}`} 
            >
              <h4 className="text-2xl font-bold mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
