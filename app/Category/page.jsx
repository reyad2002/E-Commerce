"use client";
import React, { useEffect, useState } from "react";
import axios from "axios"; // ✅ Import axios
import { FaStar, FaRegStar, FaLock } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { addToCart } from "../store/cartSlice";

const Page = () => {
  // const [products , setProducts] = useState(null)

  const dispatch = useDispatch();
  // const cartProducts = useSelector((state , action)=>{
  //   state.cartProducts
  // })

  // get products from Redux state
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  // console.log(products)

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const empty = 5 - full;
    return (
      <div className="flex gap-1 text-yellow-400 text-sm">
        {[...Array(full)].map((_, i) => (
          <FaStar key={i} />
        ))}
        {[...Array(empty)].map((_, i) => (
          <FaRegStar key={i} />
        ))}
      </div>
    );
  };

  // async function getProducts() {
  //   try {
  //     const res = await axios.get("https://fakestoreapi.com/products" , {
  //       cache: "no-store",
  //     });
  //     setProducts(res.data)
  //   } catch (error) {
  //     console.log("Error fetching products:", error);
  //   }
  // }

  // useEffect(() => {
  //   getProducts();
  // }, []);

  const displayProducts = () => {
    return products?.map((element, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-xl shadow hover:shadow-md transition p-4"
      >
        {/* {element.badge && (
          <span
            className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${
              element.badge === "Sale"
                ? "bg-blue-100 text-blue-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {element.badge}
          </span>
        )} */}
        <img
          src={element.image}
          alt={element.title}
          className="w-full h-48 object-contain mx-auto mb-4 transition-transform duration-300 hover:scale-105"
        />
        <h3 className="text-md font-medium text-gray-800 mb-1">
          {element.title}
        </h3>
        <div className="mb-2">
          <span className="text-lg font-bold text-blue-700">
            ${element.price.toFixed(2)}
          </span>

          <span className="ml-2 line-through text-gray-400">
            ${element.price.toFixed(2) / 2}
          </span>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-600">
          {renderStars(element.rating.rate)}
          <span>({element.rating.count})</span>
        </div>

        <button
          onClick={() => 
          {
            dispatch(addToCart(element))
            // console.log(element)
          }

          }
          className={`w-full py-2 text-white rounded-sm font-medium flex items-center justify-center gap-2 hover:bg-blue-800 ${"bg-main text-gray-500 cursor-pointer"}`}
        >
          <FaLock />
          Add to Cart
        </button>
      </motion.div>
    ));
  };

  return (
    <div>
      {/* displayProducts */}
      <div className="overflow-hidden grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-[86%] m-auto">
        {displayProducts()}
      </div>
    </div>
  );
};

export default Page;
