import React from "react";
import styled from "styled-components";
import { Row, Col } from "../common/Grid";

const Container = styled.div`
  margin-bottom: 4rem;
  & > div > div:nth-child(1) {
    margin-top: 2rem;
  }
  & > div > div:nth-child(2) {
    margin-top: 6rem;
  }
  & > div > div:nth-child(3) {
    margin-top: 0rem;
  }
`;

const Img = styled.img`
  width: 100%;
  display: block;
`;

export default () => {
  return (
    <Container>
      <Row>
        <Col lg="4">
          <Img src="images/product/2_l.jpg" alt="Coat_1" />
        </Col>
        <Col lg="4">
          <Img src="images/product/3_l.jpg" alt="Coat_2" />
        </Col>
        <Col lg="4">
          <Img src="images/product/4_l.jpg" alt="Coat_3" />
        </Col>
      </Row>
    </Container>
  );
};
