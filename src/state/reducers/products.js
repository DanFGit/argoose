import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await fetch(
    "https://jsainsburyplc.github.io/front-end-test/products.json"
  );

  const data = await response.json();

  // Artificially slow it down to show off the loading animation
  await new Promise((resolve) => setTimeout(resolve, 2500));

  return data;
});

const productsSlice = createSlice({
  name: "products",
  initialState: { product: {}, status: "idle" },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = "pending";
    },
    [fetchProducts.rejected]: (state) => {
      state.status = "rejected";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      action.payload.forEach((product) => {
        state.product[product.productId] = product;
      });

      state.status = "fulfilled";
    },
  },
});

const { reducer } = productsSlice;
export default reducer;
