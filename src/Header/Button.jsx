import React from 'react';
import styled from 'styled-components';
import hamburger from '../assets/icons/hamburger.svg';

const Button = styled.button`
  padding: 0;
  margin: 0;
  background: none;
  border: none;
`;

export default () =>
  (<Button type="button">
    <img src={hamburger} alt="menu toggle" />
  </Button>);
