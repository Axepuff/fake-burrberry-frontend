import React from 'react';
import styled from 'styled-components';
import arrow from '../assets/icons/arrow.svg';
import { XS, XSonly } from '../common/Responsive';
import { Col, Container, Row, Box } from '../common/Grid';
import Tabs from '../common/Tabs';
import Button from './Button';
import Logo from './Logo';

const ButtonCity = styled.button`
  padding: 0;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  background-color: transparent;
  border: none;
  color: #999;
  ::after {
    margin-left: .5rem;
    content: url(${arrow});
  }
`;

export default () =>
  (<Container>
    <Row position="start-xs middle-xs">
      <Col xs="1" md="4">
        <XS>
          <Button />
        </XS>
        <XSonly>
          <ButtonCity>Shopping in: United Kingdom (£)</ButtonCity>
        </XSonly>
      </Col>
      <Col xs="10" md="4">
        <Box>
          <Row position="center-xs">
            <Col xs="12">
              <Logo />
            </Col>
          </Row>
        </Box>
      </Col>
    </Row>
    <div className="row center-xs">
      <XSonly>
        <Tabs />
      </XSonly>
    </div>
  </Container>);
