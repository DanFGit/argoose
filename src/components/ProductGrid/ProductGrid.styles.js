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
