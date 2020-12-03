import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";

import { getBasketCount, getBasketPrice } from "../../state/selectors/basket";

import BasketIcon from "../Icons/BasketIcon";
import CloseIcon from "../Icons/CloseIcon";
import ScreenReader from "../ScreenReader/ScreenReader";
import * as Styled from "./Header.styles";

const BasketInfo = () => {
  const items = useSelector(getBasketCount);
  const total = useSelector(getBasketPrice);

  return (
    <Link to="/basket">
      <Styled.Basket>
        <ScreenReader as="p">Your basket</ScreenReader>
        <BasketIcon />

        {items ? (
          <span>
            <p>£{total.toFixed(2)}</p>
            <p>{`${items} item${items > 1 ? "s" : ""}`}</p>
          </span>
        ) : (
          <span>
            <p>Empty</p>
          </span>
        )}
      </Styled.Basket>
    </Link>
  );
};

const Close = () => (
  <Link to="/">
    <Styled.Basket>
      <ScreenReader>Back to product list</ScreenReader>
      <CloseIcon />

      <span>
        <p>Close</p>
      </span>
    </Styled.Basket>
  </Link>
);

const Header = () => (
  <Styled.Wrapper>
    <Link to="/">
      <Styled.Logo>Argoose</Styled.Logo>
    </Link>

    <ScreenReader showOnFocus as="a" href="#skip">
      Skip to content
    </ScreenReader>

    <Switch>
      <Route path="/basket" component={Close} />
      <Route component={BasketInfo} />
    </Switch>
  </Styled.Wrapper>
);

export default Header;
