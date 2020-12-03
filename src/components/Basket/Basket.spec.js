import React from "react";

import {
  emptyBasket,
  multipleItemSingleQuantityBasket,
  singleItemMultipleQuantityBasket,
} from "../../state/__mocks__/basket.mock";
import {
  errorProducts,
  loadingProducts,
} from "../../state/__mocks__/products.mock";
import { fireEvent, render, screen } from "../../utils/renderer";

import Basket from "./Basket";

it("should show a loading message when fetching the products", () => {
  render(<Basket />, {
    initialEntries: ["/basket"],
    initialState: loadingProducts,
  });

  expect(screen.getByText("fetching basket")).toBeVisible();
});

it("should show a error message when there is an error", () => {
  render(<Basket />, {
    initialEntries: ["/basket"],
    initialState: errorProducts,
  });

  expect(screen.getByText("we've had an issue")).toBeVisible();
});

it("should show a message when the basket is empty", () => {
  render(<Basket />, {
    initialEntries: ["/basket"],
    initialState: emptyBasket,
  });

  expect(screen.getByText("there's nothing here!")).toBeVisible();
});

it("should show a basket total", () => {
  render(<Basket />, {
    initialEntries: ["/basket"],
    initialState: multipleItemSingleQuantityBasket,
  });

  expect(screen.getByText("£55.98")).toBeVisible();
});

it("should show the basket items", () => {
  render(<Basket />, {
    initialEntries: ["/basket"],
    initialState: multipleItemSingleQuantityBasket,
  });

  expect(screen.getByText("Challenge White Desk Fan - 12 Inch")).toBeVisible();
  expect(
    screen.getByText("Russell Hobbs Pennine Illuminating S Steel Kettle 20444")
  ).toBeVisible();
  expect(screen.getByText("Plain Vest Top 12 BLACK")).toBeVisible();
});

it("should show the quantity", () => {
  render(<Basket />, {
    initialEntries: ["/basket"],
    initialState: singleItemMultipleQuantityBasket,
  });

  expect(screen.getByText("quantity: 2")).toBeVisible();
});

it("should remove basket items", () => {
  render(<Basket />, {
    initialEntries: ["/basket"],
    initialState: multipleItemSingleQuantityBasket,
  });

  fireEvent.click(screen.getByTestId("remove-4251824"));
  fireEvent.click(screen.getByTestId("remove-5493179"));
  fireEvent.click(screen.getByTestId("remove-tuc132404445"));

  expect(screen.getByText("there's nothing here!")).toBeVisible();
});
