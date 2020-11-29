import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "./Header";

it("should display the company name", () => {
  render(<Header />);
  expect(screen.getByText("Argoose")).toBeTruthy();
});

it("should show an empty basket", () => {
  render(<Header total={0} items={0} />);
  expect(screen.getByText("Empty")).toBeTruthy();
});

it("should show the basket info", () => {
  render(<Header total={12.34} items={8} />);
  expect(screen.getByText("£12.34")).toBeTruthy();
  expect(screen.getByText("8 items")).toBeTruthy();
});

it("should pluralise the basket info correctly", () => {
  const { rerender } = render(<Header total={12.34} items={1} />);
  expect(screen.getByText("1 item")).toBeTruthy();

  rerender(<Header total={12.34} items={2} />);
  expect(screen.getByText("2 items")).toBeTruthy();
});
