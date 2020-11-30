import { products } from "./products.mock";

export const emptyBasket = {
  basket: {
    items: {},
  },
  products: products.products,
};

export const singleItemSingleQuantityBasket = {
  basket: {
    items: { 5493179: { id: "5493179", quantity: 1 } },
  },
  products: products.products,
};

export const singleItemMultipleQuantityBasket = {
  basket: {
    items: { 5493179: { id: "5493179", quantity: 2 } },
  },
  products: products.products,
};

export const multipleItemSingleQuantityBasket = {
  basket: {
    items: {
      5493179: { id: "5493179", quantity: 1 },
      4251824: { id: "4251824", quantity: 1 },
      tuc132404445: { id: "tuc132404445", quantity: 1 },
    },
  },
  products: products.products,
};
