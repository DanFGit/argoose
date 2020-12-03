import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "basket";

const basketSlice = createSlice({
  name: "basket",
  initialState: { items: {} },
  reducers: {
    loadBasket: (state) => {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) return;

      try {
        state.items = JSON.parse(saved);
      } catch (error) {
        console.error("Error parsing saved basket");
        console.error(error);
      }
    },
    addItem: (state, action) => {
      const { id, quantity } = action.payload;

      if (state.items[id]) state.items[id].quantity += quantity;
      else state.items[id] = { id, quantity };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const {
        id,
        quantity = Infinity, // if no quantity, assume we're deleting all of them
      } = action.payload;

      if (state.items[id].quantity <= quantity) delete state.items[id];
      else state.items[id].quantity -= quantity;

      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    },
  },
});

const { reducer, actions } = basketSlice;

export const { loadBasket, addItem, removeItem } = actions;
export default reducer;
