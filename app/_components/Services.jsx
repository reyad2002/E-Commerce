'use client'
import { FaTruck, FaPiggyBank, FaPercent, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";

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
          <motion.div
            key={index}
            className="group flex flex-col items-center duration-300 transition-all hover:translate-y-[-10px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            {feature.icon}
            <h3 className="text-lg font-semibold text-sec mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
