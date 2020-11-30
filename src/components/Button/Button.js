import React from "react";
import PropTypes from "prop-types";
import * as Styled from "./Button.styles";

const Button = ({ children, ...props }) => (
  <Styled.Button {...props}>{children}</Styled.Button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
