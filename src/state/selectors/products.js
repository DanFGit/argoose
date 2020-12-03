export const getProduct = (state, id) => state.products.product[id];

export const getProducts = (state) => state.products.product;

export const getProductsArray = (state) =>
  Object.keys(state.products.product).map((id) => state.products.product[id]);

export const getProductsStatus = (state) => state.products.status;
