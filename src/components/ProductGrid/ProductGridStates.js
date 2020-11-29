import React from "react";
import * as Styled from "./ProductGrid.styles";

export const Empty = () => (
  <Styled.Takeover>
    <Styled.Heading>we&apos;ve run out of products!</Styled.Heading>

    {/* "stay tuned" would ideally be a CTA to social media or a newsletter sign up */}
    <Styled.Text>stay tuned for future product launches</Styled.Text>
  </Styled.Takeover>
);

export const Loading = () => <p>Loading</p>;

export const Error = () => (
  <Styled.Takeover>
    <Styled.Heading>we&apos;ve had an issue</Styled.Heading>
    <Styled.Text>sorry about that! please try again later</Styled.Text>
  </Styled.Takeover>
);
