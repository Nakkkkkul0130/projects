import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // {id, name, price, quantity, thumbnail}
  totalItems: 0,
  totalCost: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      const existing = state.items.find((item) => item.id === plant.id);
      if (!existing) {
        state.items.push({ ...plant, quantity: 1 });
        state.totalItems += 1;
        state.totalCost += plant.price;
      }
    },
    increment: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalItems += 1;
        state.totalCost += item.price;
      }
    },
    decrement: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalItems -= 1;
        state.totalCost -= item.price;
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        state.totalItems -= item.quantity;
        state.totalCost -= item.price * item.quantity;
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalCost = 0;
    },
  },
});

export const { addToCart, increment, decrement, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
