import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: { items: {} },
  reducers: {
    addItem: (state, action) => {
      const { id, quantity } = action.payload;

      if (state.items[id]) state.items[id].quantity += quantity;
      else state.items[id] = { id, quantity };
    },
    removeItem: (state, action) => {
      const {
        id,
        quantity = Infinity, // if no quantity, assume we're deleting all of them
      } = action.payload;

      if (state.items[id].quantity <= quantity) delete state.items[id];
      else state.items[id].quantity -= quantity;
    },
  },
});

const { reducer, actions } = basketSlice;

export const { addItem, removeItem } = actions;
export default reducer;
