import React from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  margin: 0 -0.5rem;
  display: flex;
  overflow-x: scroll;
  @media screen and (min-width: 48rem) {
    margin: 0;
  }
`;

const Image = styled.img`
  vertical-align: top;
  max-width: 100%;
  height: 400px;
  @media screen and (min-width: 48rem) {
    min-width: 432px;
    height: 576px;
  }
`;

export default () => (
  <Gallery>
    <Image src="images/product/1_s.jpg" alt="Coat_1" />
    <Image src="images/product/2_s.jpg" alt="Coat_2" />
    <Image src="images/product/3_s.jpg" alt="Coat_3" />
    <Image src="images/product/4_s.jpg" alt="Coat_4" />
  </Gallery>
);
