import React from "react";
import PropTypes from "prop-types";
import * as Styled from "./Button.styles";

const Button = ({ children }) => <Styled.Button>{children}</Styled.Button>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
