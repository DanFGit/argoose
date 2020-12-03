import styled from "styled-components";

export const List = styled.ul`
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;

  li {
    margin-bottom: 30px;
  }

  @media (min-width: 560px) {
    li {
      :nth-child(odd) {
        position: relative;
        left: -30px;
      }
      :nth-child(even) {
        position: relative;
        left: 30px;
      }
    }
  }
`;
