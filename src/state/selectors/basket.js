import { createSelector } from "@reduxjs/toolkit";
import { getProducts } from "./products";

export const getBasketItems = (state) => state.basket.items;

export const getBasketItemsArray = (state) =>
  Object.keys(state.basket.items).map((id) => state.basket.items[id]);

export const getBasketCount = createSelector([getBasketItems], (items) => {
  let count = 0;

  Object.keys(items).map((id) => (count += items[id].quantity));

  return count;
});

export const getBasketPrice = createSelector(
  [getBasketItems, getProducts],
  (items, products) => {
    let price = 0;

    Object.keys(items).map(
      (id) => (price += items[id].quantity * products[id].price)
    );

    return price;
  }
);
