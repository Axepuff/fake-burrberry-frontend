import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  padding: 1rem 0 2rem;
  margin: 0 0.5rem;
  border-bottom: solid 1px #c6c6c6;
  @media screen and (min-width: 48rem) {
    padding: 0 0 2rem;
    margin: 0;
  }
`;

const Price = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2;
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  flex-basis: 50%;
`;

const Article = styled.span`
  font-size: 0.75rem;
  line-height: 1.55;
  margin-bottom: 1rem;
`;

const ColorName = styled.span`
  font-size: 0.75rem;
  line-height: 1.35;
  flex-basis: 100%;
  margin-bottom: 1rem;
`;

const ColorList = styled.div`display: flex;`;

export default () => {
  return (
    <Info>
      <Price>110 000 руб.</Price>
      <Article>Item 39428531</Article>
      <ColorName>Colour: Honey</ColorName>
      <ColorList>
        <Button value="#232122" name="black" />
        <Button value="#cfa880" name="honey" />
      </ColorList>
    </Info>
  );
};
