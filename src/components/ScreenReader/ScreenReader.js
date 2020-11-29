import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Hidden = styled.div`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;

  ${(props) =>
    props.showOnFocus &&
    css`
      :focus,
      :active {
        position: static;
        width: auto;
        height: auto;
      }
    `}
`;

const ScreenReader = ({ as, showOnFocus = false, children, ...props }) => (
  <Hidden as={as} showOnFocus={showOnFocus} {...props}>
    {children}
  </Hidden>
);

ScreenReader.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  showOnFocus: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default ScreenReader;
