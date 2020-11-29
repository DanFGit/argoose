import styled from "styled-components";

export const Grid = styled.ul`
  margin: 0 20px;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;

  text-indent: 0;
  list-style-type: none;
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
  text-shadow: -3px -3px var(--secondary-color), 3px 3px var(--tertiary-color),
    3px -3px var(--primary-color), -3px 3px var(--primary-color);
`;

export const Text = styled.p`
  text-align: center;
`;
