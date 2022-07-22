import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../Pages/Home/Posts/postSlice";
import productsSlice from "../Pages/Home/Products/productsSlice";

export const store = configureStore({
  reducer: {
         products: productsSlice,
         posts: postSlice,
  },
});


