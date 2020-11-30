import React from "react";
import PropTypes from "prop-types";

import ScreenReader from "../ScreenReader/ScreenReader";
import AddToBasketIcon from "../Icons/AddToBasketIcon";
import Button from "../Button/Button";

import * as Styled from "./Product.styles";

/* a11y note: products are showed in an li, so user can skim just the title and price */
const Product = ({ title, price, productId, sku, addToBasket }) => (
  <Styled.Product aria-label={`${price} pounds for ${title}`}>
    <Styled.Image
      src={`https://media.4rgos.it/s/Argos/${productId}_R_SET?w=130&h=130`}
      alt=""
    />

    <Styled.Title>{title}</Styled.Title>
    <Styled.SKU>
      <ScreenReader as="span">Product ID</ScreenReader>
      {sku}
    </Styled.SKU>
    <Styled.Price>£{price.toFixed(2)}</Styled.Price>

    <Styled.CTAs>
      <Button onClick={addToBasket} data-testid={`add-${productId}`}>
        <ScreenReader as="span">Add to basket</ScreenReader>
        <AddToBasketIcon width="16" height="16" />
      </Button>
    </Styled.CTAs>
  </Styled.Product>
);

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  productId: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  addToBasket: PropTypes.func.isRequired,
};

export default Product;
