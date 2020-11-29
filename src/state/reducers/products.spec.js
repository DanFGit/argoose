import products, { fetchProducts } from "./products";

it("should initialise as idle with no products", () => {
  expect(products(undefined, {})).toEqual({ product: {}, status: "idle" });
});

it("should switch to pending when loading", () => {
  expect(products(undefined, fetchProducts.pending())).toEqual({
    product: {},
    status: "pending",
  });
});

it("should switch to rejected when there is an error", () => {
  expect(products(undefined, fetchProducts.rejected())).toEqual({
    product: {},
    status: "rejected",
  });
});

it("should normalise the products when fetched", () => {
  expect(
    products(
      undefined,
      fetchProducts.fulfilled([
        { productId: 1, title: "first" },
        { productId: 2, title: "second" },
        { productId: 3, title: "third" },
      ])
    )
  ).toEqual({
    product: {
      1: { productId: 1, title: "first" },
      2: { productId: 2, title: "second" },
      3: { productId: 3, title: "third" },
    },
    status: "fulfilled",
  });
});
