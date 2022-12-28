import { configureStore } from "@reduxjs/toolkit";
import allData from "../Features/counter";


export const Store = configureStore({
  reducer: {
    todo: allData,
  },
});
