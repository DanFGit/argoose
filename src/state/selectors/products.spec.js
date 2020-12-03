import { products } from "../__mocks__/products.mock";

import {
  getProduct,
  getProducts,
  getProductsArray,
  getProductsStatus,
} from "./products";

it("should get a specific product", () => {
  expect(getProduct(products, "4049641")).toEqual({
    productId: "4049641",
    sku: "404/9641",
    title: "Wilson Roger Federer 27 Inch Adult Tennis Racket",
    price: 24.99,
    image: "https://media.4rgos.it/s/Argos/4049641_R_SET?w=110&h=130",
  });
});

it("should get the products", () => {
  expect(getProducts(products)).toEqual(products.products.product);
});

it("should get the products as an array", () => {
  expect(getProductsArray(products)).toHaveLength(8);
  expect(getProductsArray(products)[0]).toEqual({
    productId: "4049641",
    sku: "404/9641",
    title: "Wilson Roger Federer 27 Inch Adult Tennis Racket",
    price: 24.99,
    image: "https://media.4rgos.it/s/Argos/4049641_R_SET?w=110&h=130",
  });
});

it("should get the products status", () => {
  expect(getProductsStatus(products)).toEqual("fulfilled");
});
