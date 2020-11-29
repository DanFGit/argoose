import React from "react";
import * as States from "./ProductGridStates";
import * as Styled from "./ProductGrid.styles";
import Product from "../Product/Product";

const ProductGrid = ({ products = [] }) => {
  if (products.length === 0) return <States.Empty />;
  // if (error) return <States.Error />;
  // if (loading) return <States.Loading />;

  return (
    <Styled.Grid>
      {products.map((product) => (
        <Product key={product.productId} {...product} />
      ))}
    </Styled.Grid>
  );
};

export default ProductGrid;
