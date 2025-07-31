import { createSlice } from "@reduxjs/toolkit";

const bestSellersSlice = createSlice({
  name: "bestSellersSlice",
  initialState: [
    {
      id: 21,
      image: "/p1.webp",
      title: "Lorem ipsum dolor sit amet",
      price: 89.99,
      rating: 4.5,
      reviews: 42,
      badge: "New",
      available: true,
    },
    {
      id: 22,
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
      id: 23,
      image: "/p1.webp",
      title: "Sed do eiusmod tempor ",
      price: 119.0,
      rating: 5,
      reviews: 56,
      available: true,
      showActions: true,
    },
    {
      id: 24,
      image: "/p1.webp",
      title: "Ut labore et dolore magna ",
      price: 75.5,
      rating: 3,
      reviews: 15,
      badge: "Sold Out",
      available: false,
    },
  ],
  reducers: {},
});
export default bestSellersSlice.reducer;
