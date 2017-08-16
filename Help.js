import React from 'react';
import styled from 'styled-components';

const Title = styled.h4`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.25;
  text-align: center;
  color: #171717;
  margin: 1.5rem 0 1rem;
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Link = styled.a`
  display: block;
  font-family: 'Lora', 'Arial', serif;
  font-size: 0.875rem;
  font-style: italic;
  line-height: 1.21;
  text-align: center;
  color: #171717;
  text-decoration: none;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export default () => (
  <div>
    <Title>Need help?</Title>
    <Link href="#">Find out more and contact us</Link>
  </div>
);
