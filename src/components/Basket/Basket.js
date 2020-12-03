import React from "react";
import { useSelector } from "react-redux";

import useFetchProducts from "../../hooks/useFetchProducts";
import {
  getBasketItemsArray,
  getBasketPrice,
} from "../../state/selectors/basket";

import Product from "../Product/Product";
import { Heading, Text } from "../Takeover/Takeover";

import * as Styled from "./Basket.styles";
import * as States from "./BasketStates";

const Basket = () => {
  const price = useSelector(getBasketPrice);
  const items = useSelector(getBasketItemsArray);
  const { status } = useFetchProducts();

  if (status === "idle" || status === "pending") return <States.Loading />;
  if (status === "rejected") return <States.Error />;
  if (items.length === 0) return <States.Empty />;

  return (
    <>
      <Heading as="h2">your basket</Heading>
      <Text>
        <strong>£{price}</strong>, when you&apos;re ready
      </Text>

      <Styled.List>
        {items.map((item) => (
          <Product key={item.id} id={item.id} quantity={item.quantity} />
        ))}
      </Styled.List>
    </>
  );
};

export default Basket;
