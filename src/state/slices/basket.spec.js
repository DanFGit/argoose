import basket, { addItem } from "./basket";

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
  const initialState = {
    items: { 123: { id: "123", quantity: 3 } },
  };

  expect(basket(initialState, addItem({ id: "123", quantity: 2 }))).toEqual({
    items: { 123: { id: "123", quantity: 5 } },
  });
});
