import React from "react";
import { Link } from "react-router-dom";
import { Takeover, Heading, Text } from "../Takeover/Takeover";

export const Empty = () => (
  <Takeover>
    <Heading>there&apos;s nothing here!</Heading>

    <Link to="/">
      <Text>time to go shopping</Text>
    </Link>
  </Takeover>
);

export const Loading = () => (
  <Takeover>
    <Heading animated>fetching basket</Heading>
  </Takeover>
);

export const Error = () => (
  <Takeover>
    <Heading>we&apos;ve had an issue</Heading>
    <Text>sorry about that! please try again later</Text>
  </Takeover>
);
