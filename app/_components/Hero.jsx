'use client'
import { FaTruck, FaShieldAlt, FaSyncAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="overflow-hidden Hero flex flex-col min-[1100px]:flex-row items-center justify-between mb-15 p-8 lg:pt-10 lg:px-25">
      {/* Left Text Content */}
      <motion.div
        className="max-w-xl space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.span
          className="bg-blue-100 text-main px-4 py-1 rounded-full text-sm font-semibold inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          New Collection 2025
        </motion.span>

        <motion.h1
          className="text-5xl font-bold text-gray-800 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Discover Stylish <br />
          <span className="text-main underline underline-offset-4">
            Fashion
          </span>{" "}
          For Every Season
        </motion.h1>

        <motion.p
          className="text-gray-900 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </motion.p>

        <motion.div
          className="flex-col sm:flex-row space-y-4 space-x-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button className="cursor-pointer bg-main text-white text-md px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-800 transition">
            Shop Now →
          </button>
          <button className="cursor-pointer border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            View Collection
          </button>
        </motion.div>

        <motion.div
          className="flex items-center gap-8 pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center gap-2 text-sm text-gray-100">
            <FaTruck className="text-main" /> Free Shipping
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-100">
            <FaShieldAlt className="text-main" /> Secure Payment
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-100">
            <FaSyncAlt className="text-main" /> Easy Returns
          </div>
        </motion.div>
      </motion.div>

      {/* Right Image Content */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src="/model.png" alt="Fashion Model" className="w-[450px] h-auto" />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="hidden min-[400px]:flex absolute top-10 left-0 bg-white shadow-lg rounded-xl p-4 items-center space-x-3"
        >
          <img src="/p1.webp" alt="Summer Collection" className="w-12 h-12" />
          <div>
            <p className="text-sm text-gray-600">Summer Collection</p>
            <p className="text-main font-semibold">$89.99</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 right-0 bg-white shadow-lg rounded-xl p-4 flex items-center space-x-3"
        >
          <img src="/p2.webp" alt="Casual Wear" className="w-12 h-12" />
          <div>
            <p className="text-sm text-gray-600">Casual Wear</p>
            <p className="text-main font-semibold">$59.99</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, delay: 1.2 }}
          className="absolute top-1/4 right-[-2rem] bg-main text-white text-center rounded-full w-20 h-20 flex items-center justify-center text-xl font-bold shadow-lg"
        >
          30%<br />OFF
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
