import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  margin: 20px;
  background: #ffffff;
  color: black;
  text-align: center;
  padding: 8px;
  border: 3px solid;
  border-left-color: var(--primary-color);
  border-right-color: var(--primary-color);
  border-top-color: var(--secondary-color);
  border-bottom-color: var(--tertiary-color);
}
`;

const Offline = () => (
  <Wrapper role="alert" aria-live="assertive">
    <Text>
      <strong>you are offline!</strong>
      <br />
      prices may be different when you get back online
    </Text>
  </Wrapper>
);

export default Offline;
