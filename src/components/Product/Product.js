import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

import ScreenReader from "../ScreenReader/ScreenReader";
import AddToBasketIcon from "../Icons/AddToBasketIcon";
import RemoveFromBasketIcon from "../Icons/RemoveFromBasketIcon";
import Button from "../Button/Button";

import * as Styled from "./Product.styles";
import { addItem, removeItem } from "../../state/slices/basket";

/* a11y note: by default products are shown in an li, so user can skim just the title and price */
const Product = ({ id, as, quantity = 1 }) => {
  const dispatch = useDispatch();
  const { price, title, sku } = useSelector(
    (state) => state.products.product[id]
  );

  const addToBasket = () => {
    dispatch(addItem({ id, quantity: 1 }));
  };

  const removeFromBasket = () => {
    dispatch(removeItem({ id, quantity }));
  };

  return (
    <Styled.Product aria-label={`${price} pounds for ${title}`} as={as}>
      <Styled.Image
        src={`https://media.4rgos.it/s/Argos/${id}_R_SET?w=130&h=130`}
        alt=""
      />

      <Styled.Title>{title}</Styled.Title>

      <Styled.Price>
        {quantity > 1 && (
          <Styled.Quantity>quantity: {quantity}</Styled.Quantity>
        )}
        £{(price * quantity).toFixed(2)}
      </Styled.Price>

      <Styled.SKU>
        <ScreenReader as="span">Product ID</ScreenReader>
        {sku}
      </Styled.SKU>

      <Styled.CTAs>
        <Switch>
          <Route path="/basket">
            <Button onClick={removeFromBasket} data-testid={`remove-${id}`}>
              <ScreenReader as="span">Remove from basket</ScreenReader>
              <RemoveFromBasketIcon width="16" height="16" />
            </Button>
          </Route>

          <Route>
            <Button onClick={addToBasket} data-testid={`add-${id}`}>
              <ScreenReader as="span">Add to basket</ScreenReader>
              <AddToBasketIcon width="16" height="16" />
            </Button>
          </Route>
        </Switch>
      </Styled.CTAs>
    </Styled.Product>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  as: PropTypes.string,
};

export default Product;
