import React from "react";
import Row from "../../common/Row";
import Col from "../../common/Col";
import Card from "./Card";
import More from "./More";
import styled from "styled-components";

const Recommend = styled.section`
  padding: 3rem 0.5rem 4rem;
  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0 4rem;
  }
`;

const Wrapper = styled.div`
  padding: 1.5rem 0 3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: -2rem;
  @media screen and (min-width: 48rem) {
    padding: 1rem 0 0;
  }
  @media screen and (min-width: 62rem) {
    padding: 1.5rem 0 0;
  }
`;

const Title = styled.h2`
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
  text-align: left;
  color: #171717;
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: solid 1px #171717;
  display: inline-block;
  @media screen and (min-width: 62rem) {
    text-align: center;
    border: 0;
    width: 100%;
  }
`;

export default () => {
  return (
    <Recommend>
      <Title>WE RECOMMEND</Title>
      <Wrapper>
        <Row>
          <Col xs="6" md="3">
            <Card
              href="/link"
              src="images/product/small/1.jpg"
              name="Emroided Hooded Content For Three Lines"
              price="27 000 руб."
            />
          </Col>
          <Col xs="6" md="3">
            <Card
              href="/link"
              src="images/product/small/2.jpg"
              name="Relaxed Fit Stretch Jeans Content For Three Lines"
              price="22 500 руб."
            />
          </Col>
          <Col xs="6" md="3">
            <Card
              href="/link"
              src="images/product/small/3.jpg"
              name="Leather and House Check Content For Three Lines"
              price="120 000 руб."
            />
          </Col>
          <Col xs="6" md="3">
            <Card
              href="/link"
              src="images/product/small/4.jpg"
              name="Leather Wingtip Check Content For Three Lines"
              price="46 000 руб."
            />
          </Col>
        </Row>
      </Wrapper>
      <More />
    </Recommend>
  );
};
