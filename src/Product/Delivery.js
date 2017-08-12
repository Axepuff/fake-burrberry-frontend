import React from "react";
import styled from "styled-components";
import Row from "../common/Row";
import Col from "../common/Col";

const Delivery = styled.div`
  display: none;
  @media screen and (min-width: 48rem) {
    display: block;
  }
`;

const Image = styled.img`
  width: 100%;
  vertical-align: top;
`;

const Title = styled.h2`
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: 1rem;
  line-height: 1.35;
  color: #171717;
  margin: 0;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 400;
`;

const Feature = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.75rem;
  font-weight: 800;
  color: #171717;
  margin: 0;
  margin-bottom: 0.25rem;
  line-height: 1.15;
`;

const Text = FeatureTitle.withComponent("p");

const FeatureText = Text.extend`
  line-height: 1.35;
  margin: 0;
  font-weight: 400;
`;

const Wrapper = styled.div`
  @media screen and (min-width: 62rem) {
    padding: 4rem 0 5.125rem 5.125rem;
  }
`;

export default () => {
  return (
    <Delivery>
      <Row>
        <Col md="7" lg="7">
          <Image src="images/product/5_s.jpg" alt="Delivery" />
        </Col>
        <Col md="5" lg="5">
          <Wrapper>
            <Title>Delivery</Title>
            <Feature>
              <FeatureTitle>Free Next Day Delivery</FeatureTitle>
              <FeatureText className="delivery-feauture__text">
                Order before 7pm Monday to Thursday for delivery the next day
              </FeatureText>
            </Feature>
            <Feature>
              <FeatureTitle>Collect-in-Store</FeatureTitle>
              <FeatureText>
                Order online today and pick up your items in store as early as
                tomorrow
              </FeatureText>
            </Feature>
            <Feature>
              <FeatureTitle>Free Returns</FeatureTitle>
              <FeatureText>Enjoy free returns on your order</FeatureText>
            </Feature>
            <Feature>
              <FeatureTitle>Free Gift Packaging</FeatureTitle>
              <FeatureText>
                Discover our gift packaging, a gold lined box tied with a
                coloured ribbon
              </FeatureText>
            </Feature>
          </Wrapper>
        </Col>
      </Row>
    </Delivery>
  );
};
