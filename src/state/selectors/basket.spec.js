import {
  multipleItemSingleQuantityBasket,
  singleItemMultipleQuantityBasket,
  singleItemSingleQuantityBasket,
} from "../__mocks__/basket.mock";
import { initialProducts } from "../__mocks__/products.mock";
import {
  getBasketCount,
  getBasketItems,
  getBasketItemsArray,
  getBasketPrice,
} from "./basket";

it("should get the basket items", () => {
  expect(getBasketItems(singleItemSingleQuantityBasket)).toEqual({
    5493179: {
      id: "5493179",
      quantity: 1,
    },
  });
});

it("should get the basket items as an array", () => {
  expect(getBasketItemsArray(multipleItemSingleQuantityBasket)).toEqual([
    {
      id: "4251824",
      quantity: 1,
    },
    {
      id: "5493179",
      quantity: 1,
    },
    {
      id: "tuc132404445",
      quantity: 1,
    },
  ]);
});

it("should calculate the number of items in the basket", () => {
  expect(getBasketCount(singleItemSingleQuantityBasket)).toEqual(1);
  expect(getBasketCount(singleItemMultipleQuantityBasket)).toEqual(2);
  expect(getBasketCount(multipleItemSingleQuantityBasket)).toEqual(3);
});

it("should calculate the cost of the items in the basket", () => {
  expect(getBasketPrice(singleItemSingleQuantityBasket)).toEqual(24.99);
  expect(getBasketPrice(singleItemMultipleQuantityBasket)).toEqual(49.98);
  expect(getBasketPrice(multipleItemSingleQuantityBasket)).toEqual(55.98);
});

it("should not calculate before the products have been fetched", () => {
  expect(
    getBasketCount({
      basket: multipleItemSingleQuantityBasket.basket,
      products: initialProducts.products,
    })
  ).toEqual(0);

  expect(
    getBasketPrice({
      basket: multipleItemSingleQuantityBasket.basket,
      products: initialProducts.products,
    })
  ).toEqual(0);
});
