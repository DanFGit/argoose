import React from "react";

import { render, screen } from "../../utils/renderer";
import {
  loadingProducts,
  errorProducts,
  noProducts,
  products,
  initialProducts,
} from "../__mocks__/products.mock";

import ProductGrid from "./ProductGrid";

it("should show an message when there are no products", () => {
  render(<ProductGrid />, { initialState: noProducts });
  expect(screen.getByText("we've run out of products!")).toBeTruthy();
});

it("should show a loading message when fetching the products", () => {
  render(<ProductGrid />, { initialState: loadingProducts });
  expect(screen.getByText("fetching products")).toBeTruthy();
});

it("should show a error message when there is an error", () => {
  render(<ProductGrid />, { initialState: errorProducts });
  expect(screen.getByText("we've had an issue")).toBeTruthy();
});

it("should show products", () => {
  render(<ProductGrid />, { initialState: products });

  expect(screen.getByText("Challenge White Desk Fan - 12 Inch")).toBeTruthy();
  expect(screen.getByText("Plain Vest Top 12 BLACK")).toBeTruthy();
  expect(screen.getByText("Assassin's Creed Origins PS4 Game")).toBeTruthy();
  expect(
    screen.getByText("Russell Hobbs Pennine Illuminating S Steel Kettle 20444")
  ).toBeTruthy();
  expect(
    screen.getByText("Wilson Roger Federer 27 Inch Adult Tennis Racket")
  ).toBeTruthy();
  expect(
    screen.getByText("My Little Pony Cutie Mark Rainbow Dash")
  ).toBeTruthy();
  expect(
    screen.getByText("Sim Free iPhone X 256GB Mobile Phone- Space Grey")
  ).toBeTruthy();
  expect(
    screen.getByText(
      "Duracell Supreme 750 mAh Rechargeable AAA Batteries - 4 Pack"
    )
  ).toBeTruthy();
});

it("should fetch the products if there aren't any and the status is idle", () => {
  fetch.mockResponseOnce([]);

  render(<ProductGrid />, { initialState: initialProducts });

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    "https://jsainsburyplc.github.io/front-end-test/products.json"
  );
});
