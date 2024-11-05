// store.js
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";

// Helper function to save cart to localStorage
const saveCartToLocalStorage = (state) => {
  try {
    const serializedCart = JSON.stringify(state.cartState);
    localStorage.setItem("cartState", serializedCart);
  } catch (e) {
    console.warn("Could not save cart to localStorage", e);
  }
};

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
  },
});

// Subscribe to store changes and save cart to localStorage
store.subscribe(() => {
  saveCartToLocalStorage(store.getState());
});
