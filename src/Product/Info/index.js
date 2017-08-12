import React from "react";
import styled from "styled-components";
import ButtonColor from "./ButtonColor";
import Button from "../../common/Button";
import Size from "./Size";
import { MD, LG, LGonly } from "../../common/Responsive";
import { Col, Row } from "../../common/Grid";
import { FormattedNumber } from "react-intl";

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

const Color = styled.span`
  font-size: 0.75rem;
  line-height: 1.35;
  flex-basis: 100%;
  margin-bottom: 1rem;
`;

const ColorValue = Color.extend`font-weight: 700;`;

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

export default () => {
  return (
    <div>
      <Row bottom="lg">
        <Col xs="12" lg="6">
          <Info>
            <Price>
              <FormattedNumber
                value="110000"
                style="currency"
                currency="rub"
                currencyDisplay="symbol"
                minimumFractionDigits={0}
              />
            </Price>
            <MD>
              <Article>Item 39428531</Article>
            </MD>
            <Color>
              Colour: <ColorValue>Honey</ColorValue>
            </Color>
            <ColorList>
              <ButtonColor value="#232122" name="black" />
              <ButtonColor value="#cfa880" name="honey" />
            </ColorList>
          </Info>
          <LGonly>
            <Button primary type="button">
              Add to bag
            </Button>
          </LGonly>
        </Col>
        <LGonly>
          <Col lg="6">
            <Size />
            <Button type="button">Find in store</Button>
          </Col>
        </LGonly>
      </Row>
      <LGonly>
        <TextTitle>Free Next Day Delivery</TextTitle>
        <Text>
          Order before 7pm Monday to Thursday for delivery the next day
        </Text>
      </LGonly>
    </div>
  );
};
