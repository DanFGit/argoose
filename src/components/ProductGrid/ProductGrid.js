import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Product from "../Product/Product";
import * as States from "./ProductGridStates";
import * as Styled from "./ProductGrid.styles";

import { fetchProducts as fetchProductsAction } from "../../state/slices/products";
import { addItem } from "../../state/slices/basket";

const ProductGrid = ({ products, status, fetchProducts, addToBasket }) => {
  useEffect(() => {
    if (products.length === 0 && status === "idle") fetchProducts();
  }, []);

  if (status === "idle" || status === "pending") return <States.Loading />;
  if (status === "rejected") return <States.Error />;
  if (products.length === 0) return <States.Empty />;

  return (
    <Styled.Grid>
      {products.map((product) => (
        <Product
          key={product.productId}
          {...product}
          addToBasket={() => addToBasket(product.productId)}
        />
      ))}
    </Styled.Grid>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.string.isRequired,
      sku: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  status: PropTypes.oneOf(["idle", "pending", "fulfilled", "rejected"])
    .isRequired,
  fetchProducts: PropTypes.func.isRequired,
  addToBasket: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { products } = state;

  return {
    products: Object.keys(products.product).map((id) => products.product[id]),
    status: products.status,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProductsAction()),
  addToBasket: (id) => dispatch(addItem({ id, quantity: 1 })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
