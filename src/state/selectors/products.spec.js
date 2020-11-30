import { products } from "../__mocks__/products.mock";

import { getProducts } from "./products";

it("should get the products", () => {
  expect(getProducts(products)).toEqual(products.products.product);
});
