import { configureStore } from "@reduxjs/toolkit";
import shopSpaceSlice from "./slice/shopSpaceSlice";



const store = configureStore({
    reducer:{
        shopSpace:shopSpaceSlice
    }
})


export default store;