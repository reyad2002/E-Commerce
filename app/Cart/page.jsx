'use client'
import React from "react";
import {  useDispatch, useSelector } from "react-redux";
import { deleteProduct,clearCart } from "../store/cartSlice";


const page = () => {
  const dispatch = useDispatch() 

  const cartProducts = useSelector((state)=>{
   return state.cartProducts
  })
  const totalPrice = () => {
    const total = cartProducts?.reduce((acc, ele) => acc + ele.price * (ele.quantity || 1), 0);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(total);
  };
  
  return (
    <div>
      <section className="cart-page px-4 py-8 md:px-8 lg:px-16 bg-gray-50 ">
        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
          {/* Cart Items */}
          <div className="flex-1 bg-white max-h-screen overflow-auto  rounded-xl shadow-sm p-4 sm:p-6">
            <h2 className="text-2xl font-semibold mb-4">Cart</h2>

            {/* Table Headers */}
            <div className="hidden sm:grid grid-cols-4 font-semibold text-gray-700 border-b pb-3 text-sm">
              <div className="col-span-2">PRODUCT</div>
              <div>PRICE</div>
              <div className="text-right">QUANTITY</div>
            </div>

            {/* Cart Items */}
            {cartProducts?.map((item, idx) => (
              <div
                key={idx}
                className="  flex flex-col sm:flex-row items-center gap-4 py-4 border-b"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="font-medium">{item.title}</h4>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 text-sm text-gray-600 mt-1">
                    <span>Color: {item.color}</span>
                    <span>Size: {item.size}</span>
                  </div>
                  <button onClick={()=>{
                  dispatch(deleteProduct(item.id))
                  }} 
                  className="text-red-500 text-sm mt-1 cursor-pointer hover:text-red-600  ">
                    🗑 Remove
                  </button>
                </div>
                <div className="text-center sm:text-left font-semibold text-gray-700 w-full sm:w-24">
                  ${item.price.toFixed(2)}
                </div>
                <div className="flex items-center justify-center sm:justify-end gap-2 w-full sm:w-auto">
                  <button className="w-8 h-8 rounded-full border">-</button>
                  <span>{item.quantity}</span>
                  <button className="w-8 h-8 rounded-full border">+</button>
                </div>
              </div>
            ))}

            {/* Coupon & Buttons */}
            <div className="mt-6 flex flex-col md:flex-row flex-wrap items-center gap-4">
              <input
                type="text"
                placeholder="Coupon code"
                className="border rounded-full px-4 py-2 w-full md:w-auto flex-1"
              />
              <button className="cursor-pointer hover:bg-blue-700 duration-300 transition bg-blue-600 text-white rounded-full px-6 py-2 w-full md:w-auto">
                Apply
              </button>
              <button className="cursor-pointer hover:bg-blue-600 hover:text-white duration-300 transition border border-blue-600 text-blue-600 rounded-full px-6 py-2 w-full md:w-auto">
                Update
              </button>
              <button
              onClick={()=>{
                dispatch(clearCart())
              }}
              className=" cursor-pointer hover:bg-red-500 hover:text-white duration-300 transition border border-red-500 text-red-500 rounded-full px-6 py-2 w-full md:w-auto">
                Clear
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$269.96</span>
              </div>
              <div>
                <p className="font-medium mb-2">Shipping</p>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="shipping" defaultChecked />{" "}
                    Standard - $4.99
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="shipping" /> Express - $12.99
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="shipping" /> Free Shipping (Over
                    $300)
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$27.00</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">-$0.00</span>
              </div>
            </div>

            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>{totalPrice()}</span>
              </div>
            </div>

            <button className="mt-6 w-full bg-blue-600 text-white font-medium rounded-full py-3">
              Proceed to Checkout →
            </button>
            <button className="mt-3 w-full bg-gray-100 text-gray-700 rounded-full py-2">
              ← Continue Shopping
            </button>

            {/* Payment Icons */}
            <div className="mt-6 text-center text-gray-400 text-sm">
              <p>We Accept</p>
              <div className="flex justify-center gap-3 mt-2 text-2xl">
                <span>💳</span>
                <span>🅿️</span>
                <span>📁</span>
                <span>🍎</span>
                <span>🅶</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
