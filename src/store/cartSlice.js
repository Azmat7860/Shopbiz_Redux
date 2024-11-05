// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Helper function to load cart from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cartState");
    if (serializedCart === null) return { cartList: [], total: 0 }; // Default state
    return JSON.parse(serializedCart);
  } catch (e) {
    console.warn("Could not load cart from localStorage", e);
    return { cartList: [], total: 0 };
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromLocalStorage(),
  reducers: {
    add(state, action) {
      const updatedCartList = state.cartList.concat(action.payload);
      const total = state.total + action.payload.price;
      return { ...state, total: total, cartList: updatedCartList };
    },
    remove(state, action) {
      const updatedCartList = state.cartList.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      const total = state.total - action.payload.price;
      return { ...state, total: total, cartList: updatedCartList };
    },
  },
});

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
