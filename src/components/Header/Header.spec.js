import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "./Header";

it("test jest setup", () => {
  expect(0.1 + 0.2).toEqual(0.30000000000000004);
});

it("should display the company name", () => {
  render(<Header />);
  expect(screen.getByText("Argoose")).toBeTruthy();
});
