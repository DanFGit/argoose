import React from "react";
import { render, screen, fireEvent } from "../../utils/renderer";
import {
  emptyBasket,
  multipleItemSingleQuantityBasket,
  singleItemMultipleQuantityBasket,
  singleItemSingleQuantityBasket,
} from "../../state/__mocks__/basket.mock";

import Header from "./Header";

it("should display the company name", () => {
  render(<Header />, { initialState: emptyBasket });
  expect(screen.getByText("Argoose")).toBeTruthy();
});

it("should show an empty basket", () => {
  render(<Header />, { initialState: emptyBasket });
  expect(screen.getByText("Empty")).toBeTruthy();
});

it("should show the basket info", () => {
  render(<Header />, { initialState: multipleItemSingleQuantityBasket });
  expect(screen.getByText("£55.98")).toBeTruthy();
  expect(screen.getByText("3 items")).toBeTruthy();
});

it("should show singular item counts", () => {
  render(<Header />, { initialState: singleItemSingleQuantityBasket });
  expect(screen.getByText("1 item")).toBeTruthy();
});

it("should pluralise text when the basket contains multiple quantities of a single item", () => {
  render(<Header />, { initialState: singleItemMultipleQuantityBasket });
  expect(screen.getByText("2 items")).toBeTruthy();
});

it("should pluralise text when the basket contains multiple items of single quantity", () => {
  render(<Header />, { initialState: multipleItemSingleQuantityBasket });
  expect(screen.getByText("3 items")).toBeTruthy();
});

it("should show a close icon when displaying the basket", () => {
  render(<Header />, {
    initialState: multipleItemSingleQuantityBasket,
    initialEntries: ["/basket"],
  });

  expect(screen.getByText("Close")).toBeTruthy();
});

it("should navigate between the product page and the basket page", async () => {
  render(<Header />, {
    initialState: emptyBasket,
  });

  expect(screen.queryByText("Empty")).toBeVisible();
  expect(screen.queryByText("Close")).not.toBeInTheDocument();

  await fireEvent.click(screen.getByText("Empty"));

  expect(screen.queryByText("Empty")).not.toBeInTheDocument();
  expect(screen.queryByText("Close")).toBeVisible();

  await fireEvent.click(screen.getByText("Argoose"));

  expect(screen.queryByText("Empty")).toBeVisible();
  expect(screen.queryByText("Close")).not.toBeInTheDocument();
});
