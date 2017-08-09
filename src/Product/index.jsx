import React from "react";
import Title from "./Title";
import Gallery from "./Gallery";
import Row from "../common/Row";
import Col from "../common/Col";
import Line from "../common/Line";
import ButtonBlock from "../Product/ButtonBlock";
import Description from "../Product/Description";
import Info from "../Product/Info/Info";
import Container from "../common/Container";

export default () => {
  return (
    <main className="product">
      <Container>
        <Title />
        <Row>
          <Col screen="xs" width="12" screen="md" width="7">
            <Gallery />
          </Col>
          <Col screen="xs" width="12" screen="md" width="5">
            <Info />
            <ButtonBlock />
          </Col>
        </Row>
        <Line />
        <Row>
          <Col screen="xs" width="12" screen="md" width="12">
            <Description />
          </Col>
        </Row>
      </Container>
    </main>
  );
};
