"use client";

import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Clothing", "Accessories", "Electronics"];

const products = [
  {
    image: "/p1.webp",
    title: "Lorem ipsum dolor sit amet",
    price: 89.99,
    oldPrice: 129.99,
    rating: 5,
    reviews: 24,
    category: "Clothing",
    badge: "Sale",
  },
  
  {
    image: "/p1.webp",
    title: "Consectetur adipiscing elit",
    price: 249.99,
    rating: 4,
    reviews: 18,
    category: "Accessories",
    badge: " ",
  },
  {
    image: "/p1.webp",
    title: "Sed do eiusmod tempor",
    price: 59.99,
    rating: 3,
    reviews: 7,
    category: "Accessories",
    badge: "New",
  },
  {
    image: "/p1.webp",
    title: "Incididunt ut labore et dolore",
    price: 79.99,
    oldPrice: 99.99,
    rating: 5,
    reviews: 32,
    category: "Electronics",
  },
  {
    image: "/p1.webp",
    title: "Incididunt ut labore et dolore",
    price: 79.99,
    oldPrice: 99.99,
    rating: 5,
    reviews: 32,
    category: "Clothing",
  },
  {
    image: "/p1.webp",
    title: "Incididunt ut labore et dolore",
    price: 79.99,
    oldPrice: 99.99,
    rating: 5,
    reviews: 32,
    category: "Electronics",
  },
  {
    image: "/p1.webp",
    title: "Incididunt ut labore et dolore",
    price: 79.99,
    oldPrice: 99.99,
    rating: 5,
    reviews: 32,
    category: "Clothing",
  },
  {
    image: "/p1.webp",
    title: "Incididunt ut labore et dolore",
    price: 79.99,
    oldPrice: 99.99,
    rating: 5,
    reviews: 32,
    category: "Electronics",
  },
  
];

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
const ProductFilterSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  // present the category name
  const categoryName = () => {
    return categories.map((element, index) => (
      <button
        key={index}
        onClick={() => {
          setSelectedCategory(element);
        }}
        className={`px-5 py-2 rounded-full font-medium border ${
          selectedCategory === element
            ? "bg-blue-700 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        {element}
      </button>
    ));
  };

  const displayProducts = () => {
    return filterProducts().map((element, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-xl shadow hover:shadow-md transition p-4"
      >
        {element.badge && (
          <span
            className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${
              element.badge === "Sale"
                ? "bg-blue-100 text-blue-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {element.badge}
          </span>
        )}
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
          {element.oldPrice && (
            <span className="ml-2 line-through text-gray-400">
              ${element.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-600">
          {renderStars(element.rating)}
          <span>({element.reviews})</span>
        </div>
      </motion.div>
    ));
  };
  // filter products
  const filterProducts = () => {

    return selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);
  };

  
  return (
    <section className=" py-10 px-6 ">
      {/* Category Name */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
        {categoryName()}
      </div>

      {/* displayProducts */}
      <div className="overflow-hidden grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-[86%] m-auto">
        {displayProducts()}
      </div>
    </section>
  );
};

export default ProductFilterSection;
