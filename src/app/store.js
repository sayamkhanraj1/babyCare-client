import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../Pages/Home/Products/productsSlice";

export const store = configureStore({
  reducer: {
         products: productsSlice
  },
});


