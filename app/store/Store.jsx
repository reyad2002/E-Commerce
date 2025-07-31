import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productSlice'
import cartSlice from './cartSlice'
import bestSellersSlice from './BestSellersSlice'
import filterProductsSlice from "./FilterProductsSlice"

export const store = configureStore({
    reducer:{
        products:productSlice,
        cartProducts:cartSlice,
        BestSellers:bestSellersSlice,
        filterProducts:filterProductsSlice
    }
})