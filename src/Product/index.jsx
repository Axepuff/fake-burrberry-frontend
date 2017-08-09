import React from "react";
import Row from "../common/Row";
import Col from "../common/Col";
import Line from "../common/Line";
import Container from "../common/Container";
import Title from "./Title";
import Gallery from "./Gallery";
import Delivery from "./Delivery";
import More from "./More";
import ButtonBlock from "../Product/ButtonBlock";
import Description from "../Product/Description";
import Info from "../Product/Info/Info";

export default () => {
  return (
    <main className="product">
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
        <More />
      </Container>
    </main>
  );
};
