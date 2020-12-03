import styled from "styled-components";

export const Product = styled.li`
  border-bottom: 3px solid #e4e4e4;
  text-align: center;

  display: grid;
  grid-template-areas:
    "image title"
    "image price"
    "image sku"
    "image ctas";
  grid-template-columns: 130px 1fr;
  grid-template-rows: 1fr min-content min-content max-content;
  grid-gap: 4px;

  padding-bottom: 8px;
`;

export const Title = styled.p`
  grid-area: title;
  text-align: center;
`;

export const Image = styled.img`
  grid-area: image;
`;

export const Price = styled.p`
  grid-area: price;
  text-align: right;
  font-weight: var(--bold-weight);
`;

export const Quantity = styled.span`
  text-align: right;
  font-size: 0.75rem;
  line-height: 0.75rem;
  font-weight: var(--font-weight);
`;

export const SKU = styled.p`
  grid-area: sku;
  text-align: right;
  font-size: 0.75rem;
  color: #666;
`;

export const CTAs = styled.div`
  grid-area: ctas;
  display: flex;
  justify-content: flex-end;
`;
