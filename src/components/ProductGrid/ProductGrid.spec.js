import React from "react";
import { render, screen } from "@testing-library/react";

import ProductGrid from "./ProductGrid";
import { products } from "../__mocks__/products.mock";

it("should show an message when there are no products", () => {
  render(<ProductGrid />);

  expect(screen.getByText("we've run out of products!")).toBeTruthy();
});

it("should show products", () => {
  render(<ProductGrid products={products} />);

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
