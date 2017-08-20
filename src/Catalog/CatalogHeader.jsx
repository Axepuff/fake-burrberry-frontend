import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from '../common/Grid';

const CatalogHeader = styled.div`
  padding: 2rem 0 0.5rem;
  background-color: #f3f3f3;
  @media only screen and (min-width: 48rem) {
    padding: 4rem 0 1rem;
  }
`;

const Title = styled.h2`
  font-family: 'Lora', 'Arial', serif;
  font-size: 1.625rem;
  font-weight: 500;
  text-align: left;
  color: #171717;
  line-height: 1.25;
  margin: 0;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.7;
  text-align: left;
  color: #171717;
  margin: 0;
`;

const TextLink = styled(Link)`
  height: 14px;
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.75rem;
  line-height: 1.15;
  font-weight: 400;
  color: #171717;
  border-bottom: 1px solid;
  text-decoration: none;
`;

export default () =>
  <CatalogHeader>
    <Container>
      <Row>
        <Col xs="11" md="9" lg="7">
          <Title>Men’s Clothing</Title>
          <Text>
            Explore our menswear collection for the season. Sculptural knitwear,{' '}
            <TextLink to="/">sweatshirts</TextLink>, artist overalls and oversized cabans feature
            alongside our signature trench coat in both heritage and seasonal.{' '}
            <TextLink to="/">More</TextLink>
          </Text>
        </Col>
      </Row>
    </Container>
  </CatalogHeader>;
