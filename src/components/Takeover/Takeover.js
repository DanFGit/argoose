import styled, { css, keyframes } from "styled-components";

const loading = keyframes`
  0%, 100% {
    text-shadow: -5px -5px var(--secondary-color), 5px 5px var(--tertiary-color),
    3px -3px var(--primary-color), -3px 3px var(--primary-color);
  }

  25% {
    text-shadow: 3px -3px var(--secondary-color), -3px 3px var(--tertiary-color),
    5px 5px var(--primary-color), -5px -5px var(--primary-color);
  }

  50% {
    text-shadow: 5px 5px var(--secondary-color), -5px -5px var(--tertiary-color),
    -3px 3px var(--primary-color), 3px -3px var(--primary-color);
  }

  75% {
    text-shadow: -3px 3px var(--secondary-color), 3px -3px var(--tertiary-color),
    -5px -5px var(--primary-color), 5px 5px var(--primary-color);
  }
`;

export const Takeover = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 5px;
  margin: 100px 0;
`;

export const Heading = styled.h2`
  font-weight: var(--bold-weight);
  font-size: 2rem;
  color: #fff;
  text-align: center;
  transition: text-shadow 0.1s linear;
  text-shadow: -3px -3px var(--secondary-color), 3px 3px var(--tertiary-color),
    3px -3px var(--primary-color), -3px 3px var(--primary-color);

  ${(props) =>
    props.animated &&
    css`
      animation: ${loading} 1s linear infinite;
    `}
`;

export const Text = styled.p`
  text-align: center;
`;
