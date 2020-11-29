import styled from "styled-components";

export const Wrapper = styled.header`
  padding: 8px;
  box-shadow: 0 5px var(--primary-color), 0 7px var(--secondary-color),
    0 10px var(--tertiary-color);
  margin-bottom: 15px;
  margin-left: 6px;
  margin-right: 6px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    fill: var(--primary-color);
    transition: fill 0.05s linear;

    :hover {
      fill: var(--secondary-color);
    }
  }
`;

export const Logo = styled.h1`
  font-weight: var(--font-weight);

  :first-letter {
    font-weight: var(--bold-weight);
    color: var(--primary-color);
  }
`;

export const Basket = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 2px;
    font-size: 0.75rem;
    line-height: 0.75rem;

    p:first-child {
      font-weight: var(--bold-weight);
    }
  }
`;
