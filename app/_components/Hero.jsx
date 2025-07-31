import { FaTruck, FaShieldAlt, FaSyncAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="Hero flex flex-col min-[1100px]:flex-row items-center justify-between mb-15 p-8 lg:pt-10 lg:px-25 ">
      {/* Left Text Content */}
      <div className="max-w-xl space-y-6">
        <span className="bg-blue-100 text-main px-4 py-1 rounded-full text-sm font-semibold">
          New Collection 2025
        </span>
        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
          Discover Stylish <br />
          <span className="text-main underline underline-offset-4">Fashion</span>{" "}
          For Every Season
        </h1>
        <p className="text-gray-900 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
          nec ullamcorper mattis, pulvinar dapibus leo. Vestibulum ante ipsum primis in
          faucibus.
        </p>
        <div className="flex-col sm:flex-row space-y-4 space-x-4">
          <button className="cursor-pointer bg-main text-white  text-md px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-800 transition">
            Shop Now →
          </button>
          <button className="cursor-pointer border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            View Collection
          </button>
        </div>
        <div className="flex items-center gap-8 pt-6">
          <div className="flex items-center gap-2 text-sm text-gray-100">
            <FaTruck className="text-main" /> Free Shipping
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-100">
            <FaShieldAlt className="text-main" /> Secure Payment
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-100">
            <FaSyncAlt className="text-main" /> Easy Returns
          </div>
        </div>
      </div>

      {/* Right Image Content */}
      <div className="relative">
        <img
          src="/model.png"
          alt="Fashion Model"
          className="w-[450px] h-auto"
        />
        <div className=" hidden min-[400px]:flex absolute top-10 left-0 bg-white shadow-lg rounded-xl p-4  items-center space-x-3">
          <img src="/p1.webp" alt="Summer Collection" className="w-12 h-12" />
          <div className="">
            <p className="text-sm text-gray-600 ">Summer Collection</p>
            <p className="text-main font-semibold">$89.99</p>
          </div>
        </div>
        <div className="absolute bottom-10 right-0 bg-white shadow-lg rounded-xl p-4 flex items-center space-x-3">
          <img src="/p2.webp" alt="Casual Wear" className="w-12 h-12" />
          <div>
            <p className="text-sm text-gray-600">Casual Wear</p>
            <p className="text-main font-semibold">$59.99</p>
          </div>
        </div>
        <div className="absolute top-1/4 right-[-2rem] bg-main text-white text-center rounded-full w-20 h-20 flex items-center justify-center text-xl font-bold shadow-lg">
          30%<br />OFF
        </div>
      </div>
    </section>
  );
};

export default Hero;
