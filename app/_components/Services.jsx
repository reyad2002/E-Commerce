import { FaTruck, FaPiggyBank, FaPercent, FaHeadset } from "react-icons/fa";

const Services = () => {
  const features = [
    {
      icon: <FaTruck className="text-sec text-4xl mb-4 group-hover:text-main transition-all duration-300" />,
      title: "Free Shipping",
      description:
        "Nulla sit morbi vestibulum eros duis amet, consectetur vitae lacus. Ut quis tempor felis sed nunc viverra.",
    },
    {
      icon: <FaPiggyBank className="text-sec text-4xl mb-4 group-hover:text-main transition-all duration-300" />,
      title: "Money Back Guarantee",
      description:
        "Nullam gravida felis ac nunc tincidunt, sed malesuada justo pulvinar. Vestibulum nec diam vitae eros.",
    },
    {
      icon: <FaPercent className="text-sec text-4xl mb-4 group-hover:text-main transition-all duration-300" />,
      title: "Discount Offers",
      description:
        "Nulla ipsum nisi vel adipiscing amet, dignissim consectetur ornare. Vestibulum quis posuere elit auctor.",
    },
    {
      icon: <FaHeadset className="text-sec text-4xl mb-4 group-hover:text-main transition-all duration-300" />,
      title: "24/7 Support",
      description:
        "Ipsum dolor amet sit consectetur adipiscing, nullam vitae euismod tempor nunc felis vestibulum ornare.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="group flex flex-col items-center duration-300 transition-all hover:translate-y-[-10px]">
            {feature.icon}
            <h3 className="text-lg font-semibold text-sec mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
