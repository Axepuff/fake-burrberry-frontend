import React from "react";
import styled from "styled-components";
import Row from "../common/Row";
import Col from "../common/Col";

const Container = styled.div`margin-bottom: 4rem;`;

const Img = styled.img`
  margin-top: 3rem;
  width: 100%;
  display: block;
`;

const Img2 = styled.img`
  margin-top: 6rem;
  width: 100%;
  display: block;
`;

const Img3 = styled.img`
  width: 100%;
  display: block;
`;

export default () => {
  return (
    <Container>
      <Row>
        <Col lg="4">
          <Img src="images/product/1_l.jpg" alt="Coat_1" />
        </Col>
        <Col lg="4">
          <Img2 src="images/product/2_l.jpg" alt="Coat_2" />
        </Col>
        <Col lg="4">
          <Img3 src="images/product/3_l.jpg" alt="Coat_3" />
        </Col>
      </Row>
    </Container>
  );
};
