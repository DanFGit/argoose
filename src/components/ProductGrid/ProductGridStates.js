import React from "react";
import { Takeover, Heading, Text } from "../Takeover/Takeover";

export const Empty = () => (
  <Takeover>
    <Heading>we&apos;ve run out of products!</Heading>

    {/* "stay tuned" would ideally be a CTA to social media or a newsletter sign up */}
    <Text>stay tuned for future product launches</Text>
  </Takeover>
);

export const Loading = () => (
  <Takeover>
    <Heading animated>fetching products</Heading>
  </Takeover>
);

export const Error = () => (
  <Takeover>
    <Heading>we&apos;ve had an issue</Heading>
    <Text>sorry about that! please try again later</Text>
  </Takeover>
);
