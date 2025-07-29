"use client";

import { FaStar, FaStarHalfAlt, FaRegStar, FaLock } from "react-icons/fa";
import { FiEye, FiHeart } from "react-icons/fi";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const products = [
  {
    image: "/p1.webp",
    title: "Lorem ipsum dolor sit amet",
    price: 89.99,
    rating: 4.5,
    reviews: 42,
    badge: "New",
    available: true,
  },
  {
    image: "/p1.webp",
    title: "Consectetur adipiscing elit",
    price: 64.99,
    oldPrice: 79.99,
    rating: 4,
    reviews: 28,
    badge: "Sale",
    available: true,
  },
  {
    image: "/p1.webp",
    title: "Sed do eiusmod tempor ",
    price: 119.0,
    rating: 5,
    reviews: 56,
    available: true,
    showActions: true,
  },
  {
    image: "/p1.webp",
    title: "Ut labore et dolore magna ",
    price: 75.5,
    rating: 3,
    reviews: 15,
    badge: "Sold Out",
    available: false,
  },
];

const renderStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  const stars = [];

  for (let i = 0; i < full; i++)
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
  if (half)
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
  while (stars.length < 5)
    stars.push(
      <FaRegStar key={`empty-${stars.length}`} className="text-yellow-500" />
    );

  return <div className="flex items-center gap-1">{stars}</div>;
};

const BestSellers = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold text-sec">Best Sellers</h2>
      <p className="text-gray-500 mt-2 mb-10">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      <div className="flex flex-wrap justify-center gap-6 px-4 overflow-hidden py-6">
        {products.map((product, index) => (
          <div
            key={index}
            className=" group overflow-hidden hover:translate-y-[-10px] relative w-full sm:w-75 bg-white rounded-xl shadow-lg py-6 px-4 hover:shadow-xl transition"
          >
            <div className="flex flex-col gap-3 p-4 absolute top-0 right-[-65px] group-hover:right-0 transition-all duration-300  h-24 ">
              <FavoriteBorderOutlinedIcon
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#2D465E",
                  border: "1px solid #2D465E",
                  cursor: "pointer",
                  fontSize: "30px",
                  padding: "5px",
                  borderRadius: "50%",
                  transition: "all 0.3s ease",
                  ":hover": {
                    backgroundColor: "#0A4DB8",
                    color: "#ffffff",
                  },
                }}
              />
              <RemoveRedEyeOutlinedIcon
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#2D465E",
                  border: "1px solid #2D465E",
                  cursor: "pointer",
                  fontSize: "30px",
                  padding: "5px",
                  borderRadius: "50%",
                  transition: "all 0.3s ease",
                  ":hover": {
                    backgroundColor: "#0A4DB8",
                    color: "#ffffff",
                  },
                }}
              />
            </div>
            {product.badge && (
              <span
                className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded ${
                  product.badge === "New"
                    ? "bg-main text-white"
                    : product.badge === "Sale"
                    ? "bg-red-100 text-red-500"
                    : "bg-gray-400 text-white"
                }`}
              >
                {product.badge}
              </span>
            )}

            {/* {product.showActions && (
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button className="bg-white p-2 rounded-full shadow hover:text-blue-600">
                  <FiHeart />
                </button>
                <button className="bg-white p-2 rounded-full shadow hover:text-blue-600">
                  <FiEye />
                </button>
              </div>
            )} */}

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-70 object-contain mx-auto mb-4"
            />

            <h3 className="text-sec text-left   text-md mb-1">
              {product.title}
            </h3>

            <div className="text-left text-sm mb-2">
              <span className="text-lg font-bold text-sec">
                ${product.price.toFixed(2)}
              </span>{" "}
              {product.oldPrice && (
                <span className="line-through text-gray-400 ml-2">
                  ${product.oldPrice}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
              {renderStars(product.rating)}
              <span>({product.reviews})</span>
            </div>

            <button
              disabled={!product.available}
              className={`w-full py-2 text-white rounded-sm font-medium flex items-center justify-center gap-2 ${
                product.available
                  ? "bg-main hover:bg-main cursor-pointer"
                  : "bg-gray-400 text-gray-500 cursor-not-allowed"
              }`}
            >
              <FaLock />
              {product.available ? "Add to Cart" : "Sold Out"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
