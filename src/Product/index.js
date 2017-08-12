import React from "react";
import styled from "styled-components";
import Row from "../common/Row";
import Col from "../common/Col";
import Line from "../common/Line";
import Container from "../common/Container";
import Title from "./Title";
import Gallery from "./Gallery";
import Delivery from "./Delivery";
import Recommend from "./Recommend";
import ButtonBlock from "./ButtonBlock";
import Description from "./Description/index.js";
import Info from "./Info";

const Product = styled.main`
  @media screen and (min-width: 48rem) {
    .product {
      margin: 0;
    }
  }
`;

export default () => {
  return (
    <Product>
      <Container>
        <Title />
        <Row>
          <Col xs="12" md="7">
            <Gallery />
          </Col>
          <Col xs="12" md="5">
            <Info />
            <ButtonBlock />
          </Col>
        </Row>
        <Line />
        <Row>
          <Col xs="12" md="12">
            <Description />
          </Col>
          <Col md="12">
            <Delivery />
          </Col>
        </Row>
        <Recommend />
      </Container>
    </Product>
  );
};
