import React from "react";
import styled from "styled-components";
import { Row, Col } from "../common/Grid";

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

const SubTitle = styled.h3`
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.75rem;
  font-weight: 800;
  color: #171717;
  margin: 0;
  margin-bottom: 0.25rem;
  line-height: 1.15;
`;

const Text = styled.p`
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.75rem;
  font-weight: 800;
  color: #171717;
  line-height: 1.35;
  margin: 0;
  font-weight: 400;
`;

const Wrapper = styled.div`
  @media screen and (min-width: 62rem) {
    padding: 4rem 0 0 5.125rem;
  }
`;

export default () => {
  return (
    <Delivery>
      <Row>
        <Col md="7" lg="7">
          <Image
            src="images/product/5_s.jpg"
            srcSet="images/product/5_m.jpg 2x, images/product/5_l.jpg 3x"
            alt="Delivery"
          />
        </Col>
        <Col md="5" lg="5">
          <Wrapper>
            <Title>Delivery</Title>
            <Feature>
              <SubTitle>Free Next Day Delivery</SubTitle>
              <Text className="delivery-feauture__text">
                Order before 7pm Monday to Thursday for delivery the next day
              </Text>
            </Feature>
            <Feature>
              <SubTitle>Collect-in-Store</SubTitle>
              <Text>
                Order online today and pick up your items in store as early as
                tomorrow
              </Text>
            </Feature>
            <Feature>
              <SubTitle>Free Returns</SubTitle>
              <Text>Enjoy free returns on your order</Text>
            </Feature>
            <Feature>
              <SubTitle>Free Gift Packaging</SubTitle>
              <Text>
                Discover our gift packaging, a gold lined box tied with a
                coloured ribbon
              </Text>
            </Feature>
          </Wrapper>
        </Col>
      </Row>
    </Delivery>
  );
};
