"use client";
import React, { useEffect, useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Link from "next/link";

const Header = () => {
  const [HiddenTopHeader, setHiddenTopheader] = useState(false);
  const [openMenue, setOpenMenue] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setHiddenTopheader(true);
      } else {
        setHiddenTopheader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // ✅ Clean up on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`  headerCon${
        HiddenTopHeader == true && ""
      } sticky left-0 top-0 w-full z-40`}
    >
      {/* Top Header */}
      <div
        className={`topHeader bg-bwhite ${
          HiddenTopHeader == true ? "hidden" : "block"
        }`}
      >
        <div className="text-center container xl:px-25 m-auto topHeaderCon text-sm  py-2 w-full flex justify-between items-center flex-wrap">
          {/* Left Section */}
          <div className="topHeaderLeft w-full md:w-1/3 flex items-center justify-center md:justify-start gapx-2">
            <CallIcon />
            <span>
              Need Help? Call Us:{" "}
              <a
                href="tel:01003472237"
                className="text-main font-bold"
                aria-label="Call us at +201003472237"
              >
                +201003472237
              </a>
            </span>
          </div>

          {/* Middle Section */}
          <div className="topHeadermed hidden md:block text-main font-bold w-full sm:w-1/3 text-center mt-2 sm:mt-0">
            🎁20% off on your first order
          </div>

          {/* Right Section */}
          <div className="topHeaderright hidden md:flex justify-center sm:justify-end items-center gap-5 w-full sm:w-1/3 mt-2 sm:mt-0">
            <div
              className="trans cursor-pointer flex items-center gap-2"
              aria-label="Change language"
            >
              <GTranslateIcon />
              EN
            </div>
            <div className="USD cursor-pointer" aria-label="Currency">
              USD
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder for medium and end headers */}
      <div className="medHeader ">
        <div className="bg-white  medHeaderCon text-center container max-[700px]:px-10  xl:px-25 m-auto topHeaderCon text-sm  py-6 w-full flex justify-between items-center ">
          {/* Logo */}
          <div className="logo text-3xl font-bold text-sec">eStore</div>

          {/* Search Bar */}
          <div className=" hidden md:flex max-w-sm  w-full relative">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none shadow-sm"
            />
            <button className="absolute right-1 top-1 bottom-1 px-4 bg-main text-white rounded-full flex items-center justify-center">
              <SearchIcon />
            </button>
          </div>
          {/* Icons */}
          <div className="  icons flex gap-6 items-center">
            <div className="hidden sm:block md:text-[35px] text-[20px]">
              <PersonOutlinedIcon className="cursor-pointer text-sec" />
            </div>
            <div className="relative cursor-pointer md:text-[35px] text-[20px] ">
              <FavoriteBorderIcon className="text-sec" />
              <span className="absolute -top-1 -right-2 bg-main text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            <div className="relative cursor-pointer md:text-[35px] text-[20px] ">
              <ShoppingCartOutlinedIcon className="text-sec" />
              <span className="absolute -top-1 -right-2 bg-main text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </div>
            <div
              className=" xl:hidden block relative cursor-pointer md:text-[35px] text-[20px] "
              onClick={() => {
                setOpenMenue(!openMenue);
              }}
            >
              <MenuOutlinedIcon className="text-sec" />
            </div>
          </div>
        </div>
      </div>
      <div className="endHeader">
        {/* Navigation Menu */}
        <nav className="hidden xl:block bg-white   xl:px-25 border-1 border-gray-300  font-medium text-gray-700 py-5 text-md">
          <ul className="flex space-x-8">
            <li
              onClick={() => {
                setOpenMenue(!openMenue);
              }}
              className="hover:text-main duration-200 transition"
            >
              <Link href={"/"}> Home</Link>
            </li>
            <li
              onClick={() => {
                setOpenMenue(!openMenue);
              }}
              className="hover:text-main duration-200 transition"
            >
              {/* <a href="#"></a> */}
              <Link href={"/About"}> About</Link>
            </li>
            <li
              onClick={() => {
                setOpenMenue(!openMenue);
              }}
              className="hover:text-main duration-200 transition "
            >
              {/* <a href="#">Category</a> */}
              <Link className=" " href={"/Category"}>
                {" "}
                Category
              </Link>
            </li>
            <li
              onClick={() => {
                setOpenMenue(!openMenue);
              }}
              className=" duration-200 transition"
            >
              {/* <a href="#">Product Details</a> */}
              <Link className="cursor-not-allowed " href={"/ProductDetails"}>
                {" "}
                ProductDetails
              </Link>
            </li>
            <li
              onClick={() => {
                setOpenMenue(!openMenue);
              }}
              className="hover:text-main duration-200 transition"
            >
              {/* <a href="#">Cart</a> */}
              <Link href={"/Cart"}> Cart </Link>
            </li>
            <li
              onClick={() => {
                setOpenMenue(!openMenue);
              }}
              className="hover:text-main duration-200 transition "
            >
              <a href="#">Checkout</a>
            </li>
            <li className="hover:text-main duration-200 transition">
              <a href="#">Dropdown </a>
            </li>
            <li className="hover:text-main duration-200 transition">
              <a href="#">Megamenu </a>
            </li>
            <li className="hover:text-main duration-200 transition">
              <a href="#">Megamenu </a>
            </li>
            <li
              onClick={() => {
                setOpenMenue(!openMenue);
              }}
              className="hover:text-main duration-200 transition"
            >
              {/* <a href="#">Contact</a> */}
              <Link href={"/Contact"}> Contact</Link>
            </li>
          </ul>
        </nav>
        {/* mobile menue */}
        <nav
          className={`block xl:hidden bg-gray-200 h-[100vh] absolute top-0 left-0 w-2/3 md:w-1/3 p-4 transition-all duration-500 z-50 ${
            openMenue ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col justify-center items-start gap-5 ">
            <li
              className="self-end cursor-pointer"
              onClick={() => {
                setOpenMenue(!openMenue);
              }}
            >
              <CancelOutlinedIcon />
            </li>
            <li
              onClick={() => {
                setOpenMenue(!openMenue);
              }}
              className="text-main duration-200 transition hover:translate-x-1  w-full"
            >
              <Link href={"/"}> Home</Link>
            </li>
            <li
              onClick={() => {
                setOpenMenue(!openMenue);
              }}
              className="hover:text-main duration-200 transition hover:translate-x-1 w-full"
            >
              <Link href={"/About"}> About</Link>
            </li>

            <li
              onClick={() => {
                setOpenMenue(!openMenue);
              }}
              className="hover:text-main duration-200 transition hover:translate-x-1 w-full "
            >
              <Link className=" " href={"/Category"}>
                {" "}
                Category
              </Link>
            </li>
            <li className="hover:text-main duration-200 transition hover:translate-x-1 w-full">
              <a href="#">Product Details</a>
            </li>
            <li
              onClick={() => {
                setOpenMenue(!openMenue);
              }}
              className="hover:text-main duration-200 transition hover:translate-x-1 w-full"
            >
              <Link href={"/Cart"}> Cart </Link>
            </li>
            <li className="hover:text-main duration-200 transition hover:translate-x-1 w-full">
              <a href="#">Checkout</a>
            </li>
            <li className="hover:text-main duration-200 transition hover:translate-x-1 w-full">
              <a href="#">Dropdown </a>
            </li>
            <li className="hover:text-main duration-200 transition hover:translate-x-1 w-full">
              <a href="#">Megamenu </a>
            </li>
            <li className="hover:text-main duration-200 transition hover:translate-x-1 w-full">
              <a href="#">Megamenu </a>
            </li>
            <li
              onClick={() => {
                setOpenMenue(!openMenue);
              }}
              className="hover:text-main duration-200 transition hover:translate-x-1 w-full"
            >
              <Link href={"/Contact"}> Contact</Link>
            </li>
            <li>
              <PersonOutlinedIcon className="cursor-pointer text-sec" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
