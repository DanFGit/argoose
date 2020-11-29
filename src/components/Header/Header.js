import React from "react";
import PropTypes from "prop-types";

import BasketIcon from "../Icons/BasketIcon";
import ScreenReader from "../ScreenReader/ScreenReader";
import * as Styled from "./Header.styles";

const Header = ({ total, items }) => (
  <Styled.Wrapper>
    <Styled.Logo>Argoose</Styled.Logo>

    <ScreenReader showOnFocus as="a" href="#skip">
      Skip to content
    </ScreenReader>

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
  </Styled.Wrapper>
);

// todo: hook up to redux
Header.defaultProps = {
  total: 4.99,
  items: 2,
};

Header.propTypes = {
  total: PropTypes.number,
  items: PropTypes.number,
};

export default Header;
