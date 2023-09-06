import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cart-reducer";

export const store = configureStore({
    reducer:{
        cart:cartReducer,
    },
})