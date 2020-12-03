import styled from "styled-components";

export const List = styled.ul`
  width: 500px;
  margin: 0 auto;
  margin-top: 30px;

  li {
    margin-bottom: 30px;

    :nth-child(odd) {
      position: relative;
      left: -30px;
    }
    :nth-child(even) {
      position: relative;
      left: 30px;
    }
  }
`;
