import React from "react";
import styled from "styled-components";
import ButtonColor from "./ButtonColor";
import Button from "../../common/Button";
import Size from "./Size";
import { LG } from "../../common/Responsive";
import { MD } from "../../common/Responsive";
import Col from "../../common/Col";
import Row from "../../common/Row";

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
  @media screen and (min-width: 62rem) {
    padding-bottom: 1.5rem;
  }
`;

const Price = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2;
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  flex-basis: 50%;
  @media screen and (min-width: 48rem) {
    margin-bottom: 3rem;
  }
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

const TextTitle = styled.h3`
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.75rem;
  font-weight: bold;
  color: #171717;
  line-height: 1.15;
  margin: 0;
  padding: 0.4rem 0;
`;

const TextP = TextTitle.withComponent("p");

const Text = TextP.extend`
  padding: 0;
  line-height: 1.35;
  font-weight: 400;
`;

const ColorList = styled.div`display: flex;`;
// const Wrapper = styled.div`margin: 0 -0.5rem;`;

export default () => {
  return (
    <div>
      <MD>
        <Info>
          <Price>110 000 руб.</Price>
          <Article>Item 39428531</Article>
          <ColorName>Colour: Honey</ColorName>
          <ColorList>
            <ButtonColor value="#232122" name="black" />
            <ButtonColor value="#cfa880" name="honey" />
          </ColorList>
        </Info>
      </MD>
      <LG>
        <Row bottom="bottom-lg">
          <Col lg="6">
            <Info>
              <Price>110 000 руб.</Price>
              <ColorName>Colour: Honey</ColorName>
              <ColorList>
                <ButtonColor value="#232122" name="black" />
                <ButtonColor value="#cfa880" name="honey" />
              </ColorList>
            </Info>
            <Button primary type="button">
              Add to bag
            </Button>
          </Col>
          <Col lg="6">
            <Size />
            <Button type="button">Find in store</Button>
          </Col>
        </Row>
        <TextTitle>Free Next Day Delivery</TextTitle>
        <Text>
          Order before 7pm Monday to Thursday for delivery the next day
        </Text>
      </LG>
    </div>
  );
};
