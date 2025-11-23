import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./habit-slice";
import productReducer from "./product-slice";

const store = configureStore({
  reducer: {
    habits: habitReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;