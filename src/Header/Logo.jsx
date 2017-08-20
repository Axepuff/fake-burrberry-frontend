import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './../assets/logo.svg';

const Image = styled.img`
  height: .75rem;
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;
  vertical-align: middle;
  @media only screen and (min-width: 48rem) {
    height: 1rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  @media only screen and (min-width: 62rem) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

export default () =>
  (<Link to="/">
    <Image src={logo} alt="Burberry Logo" />
  </Link>);
