import { configureStore } from "@reduxjs/toolkit";
import productslice from "./slice/productslice"
import wishListSlice from"./slice/wishListSlice"
import cartSlice from "./slice/cartSlice"

const cartStore=configureStore({
    reducer:{
        productReducer:productslice,
        wishListReducer:wishListSlice,
        cartReducer:cartSlice

    }
})

export default cartStore