import styled from "styled-components";

export const Button = styled.button`
  background: var(--primary-color);
  border: 0;
  padding: 6px 9px;
  transition: background 0.1s;

  :hover,
  :active {
    background: var(--secondary-color);
  }

  svg {
    display: block;
  }
`;
