import React from "react";
import styled from "styled-components";
import { Col, Container, Row } from "../common/Grid";
import { Line } from "../common/Line";
import { LGonly, MD } from "../common/Responsive";
import Gallery from "./Gallery";
import Photos from "./Photos";
import Delivery from "./Delivery";
import Recommend from "./Recommend";
import ButtonBlock from "./ButtonBlock";
import Description from "./Description/index.js";
import Info from "./Info";

const Product = styled.main`@media screen and (min-width: 48rem) {margin: 0;}`;
const Title = styled.h1`
  padding: 1rem 0.5rem;
  font-family: 'Lora', 'Arial', serif;
  font-size: 1.25rem;
  color: #171717;
  font-weight: 400;
  margin: 0;
  line-height: 1.2;
  font-weight: 400;
  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0;
    font-size: 1.5rem;
    line-height: 1.15;
  }
  @media screen and (min-width: 62rem) {
    padding: 10rem 0 0.5rem;
  }
`;

const Wrapper = styled.div`
  @media screen and (min-width: 62rem) {
    background-color: #d4bdad;
    margin-bottom: 4rem;
  }
`;

const ProductImage = styled.img`
  display: block;
  width: 100%;
`;

export default () => {
  return (
    <Product>
      <Wrapper>
        <Container>
          <MD>
            <Title>Long Cotton Gabardine Car Coat Coat Coat Coat Coat</Title>
          </MD>
          <Row>
            <Col xs="12" md="7" lg="6">
              <MD>
                <Gallery />
              </MD>
              <LGonly>
                <ProductImage
                  src="images/product/1_s.jpg"
                  srcSet="images/product/1_m.jpg 2x, images/product/1_l.jpg 3x"
                  alt="Long Cotton Gabardine Car Coat"
                />
              </LGonly>
            </Col>
            <Col xs="12" md="5" lg="6">
              <LGonly>
                <Title>
                  Long Cotton Gabardine Car Coat Coat Coat Coat Coat
                </Title>
              </LGonly>
              <Info />
              <ButtonBlock />
            </Col>
          </Row>
          <Line />
        </Container>
      </Wrapper>
      <Container>
        <Row>
          <Col xs="12" md="12">
            <Description />
          </Col>
          <LGonly>
            <Col md="12">
              <Photos />
            </Col>
          </LGonly>
          <Col md="12">
            <Delivery />
          </Col>
        </Row>
        <Recommend />
      </Container>
    </Product>
  );
};
