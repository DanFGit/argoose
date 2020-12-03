import { createSelector } from "@reduxjs/toolkit";
import { getProducts, getProductsStatus } from "./products";

export const getBasketItems = (state) => state.basket.items;

export const getBasketItemsArray = (state) =>
  Object.keys(state.basket.items).map((id) => state.basket.items[id]);

export const getBasketCount = createSelector(
  [getBasketItems, getProductsStatus],
  (items, status) => {
    if (status !== "fulfilled") return 0;

    // todo: this will break if a product in the basket is removed from the JSON endpoint
    let count = 0;

    Object.keys(items).map((id) => (count += items[id].quantity));

    return count;
  }
);

export const getBasketPrice = createSelector(
  [getBasketItems, getProducts, getProductsStatus],
  (items, products, status) => {
    if (status !== "fulfilled") return 0;

    // todo: this will break if a product in the basket is removed from the JSON endpoint
    let price = 0;

    Object.keys(items).map(
      (id) => (price += items[id].quantity * products[id].price)
    );

    return price;
  }
);
