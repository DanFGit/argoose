import {
  singleItemMultipleQuantityBasket,
  singleItemSingleQuantityBasket,
} from "../__mocks__/basket.mock";
import basket, { addItem, removeItem } from "./basket";

it("should initialise with no products", () => {
  expect(basket(undefined, {})).toEqual({ items: {} });
});

it("should add a new item", () => {
  expect(basket(undefined, addItem({ id: "123", quantity: 1 }))).toEqual({
    items: { 123: { id: "123", quantity: 1 } },
  });
});

it("should add multiple quantities of a new item", () => {
  expect(basket(undefined, addItem({ id: "123", quantity: 3 }))).toEqual({
    items: { 123: { id: "123", quantity: 3 } },
  });
});

it("should increase the quantity when adding an already added item", () => {
  expect(
    basket(
      singleItemMultipleQuantityBasket.basket,
      addItem({ id: "5493179", quantity: 2 })
    )
  ).toEqual({
    items: { 5493179: { id: "5493179", quantity: 4 } },
  });
});

it("should remove an item", () => {
  expect(
    basket(singleItemSingleQuantityBasket.basket, removeItem({ id: "5493179" }))
  ).toEqual({
    items: {},
  });
});

it("should remove all quantity of an item if no quantity is specified", () => {
  expect(
    basket(
      singleItemMultipleQuantityBasket.basket,
      removeItem({ id: "5493179" })
    )
  ).toEqual({
    items: {},
  });
});

it("should remove a specific quantity of an item", () => {
  expect(
    basket(
      singleItemMultipleQuantityBasket.basket,
      removeItem({ id: "5493179", quantity: 1 })
    )
  ).toEqual({
    items: { 5493179: { id: "5493179", quantity: 1 } },
  });
});
