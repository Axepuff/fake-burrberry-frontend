/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Col, Container, Row } from '../common/Grid';
import { LGonly } from '../common/Responsive';
import Help from '../common/Help';

const Footer = styled.footer`
  padding: 2rem 0.5rem 2rem;
  background-color: #f3f3f3;
  @media screen and (min-width: 48rem) {
    padding: 2rem 0.5rem 2rem;
  }
  @media screen and (min-width: 62rem) {
    padding: 4rem 0.5rem 4rem;
  }
`;

const Wrapper = styled.div`font-size: 0;`;

const Button = styled.button`
  display: block;
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: left;
  color: #999999;
  border: 0;
  background: transparent;
  margin-bottom: 1rem;
  padding: 0;
  @media screen and (min-width: 48rem) {
    line-height: 1.35;
    display: inline-block;
    margin-right: 1.5rem;
  }
  @media screen and (min-width: 62rem) {
    margin-top: 2.5rem;
    margin-right: 3rem;
    line-height: 1;
  }
`;

const Title = styled.h3`
  display: none;
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.75rem;
  font-weight: 800;
  color: #171717;
  line-height: 1.15;
  margin: 0;
  margin-bottom: 1rem;
  text-transform: uppercase;
  @media screen and (min-width: 48rem) {
    display: block;
  }
`;

const Link = styled.a`
  display: none;
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.35;
  color: #999999;
  text-decoration: none;
  margin-bottom: 0.75rem;
  @media screen and (min-width: 48rem) {
    display: block;
  }
`;

const StorePhoto = styled.img`
  width: 232px;
  height: 154px;
  margin-top: 2rem;
  vertical-align: middle;
`;

const StoreLink = styled(RouterLink)`
  display: inline-block;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  color: #171717;
  text-decoration: none;
  border-bottom: solid 1px #171717;
`;

const SelectedText = styled.span`
  font-weight: 500;
  color: #171717;
`;

export default function () {
  return (
    <Footer>
      <Wrapper>
        <Container>
          <Row>
            <Col md="3">
              <nav>
                <Title>Customer Service</Title>
                <Link href="#">Contact Us</Link>
                <Link href="#">Payment</Link>
                <Link href="#">Shipping</Link>
                <Link href="#">Returns</Link>
                <Link href="#">Faqs</Link>
                <Link href="#">Live Chat</Link>
                <Link href="#">The Burberry App</Link>
                <Link href="#">Store Locator</Link>
              </nav>
            </Col>
            <Col md="3">
              <nav>
                <Title>Our Company</Title>
                <Link href="#">Our History</Link>
                <Link href="#">Burberry Group Pic</Link>
                <Link href="#">Careers</Link>
                <Link href="#">Corporate Responsibility</Link>
                <Link href="#">Site Map</Link>
              </nav>
            </Col>
            <Col md="3">
              <nav>
                <Title>Legal &amp; Cookies</Title>
                <Link href="#">Terms &amp; Conditions</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Cookie Policy</Link>
                <Link href="#">Accessibility Statement</Link>
                <Link href="#">Japan Only - SCTL Indications</Link>
              </nav>
            </Col>
            <LGonly>
              <Col lg="3">
                <StorePhoto
                  src={`${process.env.PUBLIC_URL}/images/store.jpg`}
                  alt="Store interior"
                />
                <StoreLink to="">Find a store</StoreLink>
              </Col>
            </LGonly>
          </Row>
          <Button>
            Shipping country: <SelectedText>Russian Federation</SelectedText>
          </Button>
          <Button>
            Language: <SelectedText>English</SelectedText>
          </Button>
          <Help />
        </Container>
      </Wrapper>
    </Footer>
  );
}
