import React from 'react';
import styled from 'styled-components';
import arrow from '../assets/icons/arrow.svg';
import { Container } from '../common/Grid';

const Filter = styled.div`
  padding: 1.5rem 0;
  background-color: #f3f3f3;
  white-space: nowrap;
`;

const Type = styled.button`
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.75rem;
  line-height: 1.35;
  text-align: left;
  color: #171717;
  white-space: nowrap;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0 1rem 0 0;
  ::after {
    display: inline-block;
    margin: 0 0 0 0.5rem;
    content: '';
    width: 12px;
    height: 6px;
    background: url(${arrow});
    background-size: cover;
  }
  :last-child {
      @media only screen and (min-width: 48rem) {
        float: right;
  }
`;

export default () =>
  (<Filter>
    <Container>
      <Type>Category</Type>
      <Type>Colour</Type>
      <Type>Size</Type>
      <Type>Sort by price</Type>
    </Container>
  </Filter>);
