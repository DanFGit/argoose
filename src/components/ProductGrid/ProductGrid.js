import React from "react";

import Product from "../Product/Product";
import * as States from "./ProductGridStates";
import * as Styled from "./ProductGrid.styles";

import useFetchProducts from "../../hooks/useFetchProducts";

const ProductGrid = () => {
  const { products, status } = useFetchProducts();

  if (status === "idle" || status === "pending") return <States.Loading />;
  if (status === "rejected") return <States.Error />;
  if (products.length === 0) return <States.Empty />;

  return (
    <Styled.Grid>
      {products.map(({ productId }) => (
        <Product key={productId} id={productId} />
      ))}
    </Styled.Grid>
  );
};

export default ProductGrid;
