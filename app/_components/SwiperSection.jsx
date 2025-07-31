"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const categories = [
  {
    image: "/p1.webp",
    title: "Vestibulum ante",
    count: "4 Products",
  },
  {
    image: "/p1.webp",
    title: "Maecenas nec",
    count: "8 Products",
  },
  {
    image: "/p1.webp",
    title: "Aenean tellus",
    count: "4 Products",
  },
  {
    image: "/p1.webp",
    title: "Donec quam",
    count: "12 Products",
  },
  {
    image: "/p1.webp",
    title: "Phasellus leo",
    count: "4 Products",
  },
  {
    image: "/p1.webp",
    title: "Quisque rutrum",
    count: "2 Products",
  },
];
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#2D465E",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        zIndex: 1,
        border:"1px solid black"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#2D465E",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        zIndex: 1,
         border:"1px solid black"
      }}
      onClick={onClick}
    />
  );
}
const SwiperSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    ltr: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 py-20 m-auto w-[85%] ">
    <Slider {...settings}>
  {categories.map((item, index) => (
    <div key={index} className="px-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ scale: 1.03 }}
        className="group bg-gray-200 rounded-lg shadow text-center px-6 py-3 hover:shadow-md transition"
      >
        <img
          src={item.image}
          alt={item.title}
          className="group-hover:rotate-8 group-hover:scale-110 transition-all duration-300 mx-auto h-32 object-contain mb-4"
        />
        <h4 className="group-hover:text-main transition-all duration-300 text-md font-semibold text-sec">
          {item.title}
        </h4>
        <p className="text-sm text-gray-500">{item.count}</p>
      </motion.div>
    </div>
  ))}
</Slider>

    </div>
  );
};

export default SwiperSection;
