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
  },
});

const { reducer, actions } = basketSlice;

export const { addItem } = actions;
export default reducer;
