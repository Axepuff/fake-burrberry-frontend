import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { XSonly, XS } from '../common/Responsive';
import { Col, Container, Row } from '../common/Grid';
import Card from '../Product/Card';
import CatalogHeader from './CatalogHeader';
import ShowMore from './More';
import Filter from './Filter';

const SectionTitle = styled.h3`
  font-family: "Lora", "Times New Roman", serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #171717;
  margin: 0;
  padding: 2rem 0 1rem;
  @media screen and (min-width: 48rem) {
    font-size: 1.25rem;
    padding: 4rem 0 2rem;
  }
`;

const Line = styled.hr`
  height: 1px;
  background-color: #c6c6c6;
  border: none;
`;

const heritageTrenchCoats = [
  {
    id: 1,
    to: 'men/the-chelsea-short-heritage-trench-coat',
    productId: 'the-westminster-Long-heritage-trench-coat',
    style: 'Slim fit',
    name: 'The Westminster – Long Heritage Trench Coat',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/98b658a12f42e12facf56ca59c87a33084b76231.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650',
    colours: '3',
    value: '1395',
    currency: 'GBP',
  },
  {
    id: 2,
    to: 'men/the-sandringham-mid-length-heritage-trench-coat',
    style: 'Classic fit',
    name: 'The Sandringham – Mid-length Heritage Trench Coat',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/eaa7c593b7a0db541ccf911896c8c4d3ee315438.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650',
    colours: '3',
    value: '1295',
    currency: 'GBP',
  },
  {
    id: 3,
    to: 'men/the-kensington-mid-length-heritage-trench-coat',
    style: 'Relaxed fit',
    name: 'The Kensington – Mid-Length Heritage Trench Coat',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/eac064c14f5bb91e10e74b775f2ba408c3038bf6.jpg?$BBY_V2_ML_3X4$&hei=869&wid=652',
    colours: '4',
    value: '1295',
    currency: 'GBP',
  },
  {
    id: 4,
    to: 'men/the-westminster-Long-heritage-trench-coat',
    style: 'Relaxed fit',
    name: 'The Westminster – Long Heritage Trench Coat',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/b618c1ccfb98a97d9a3c2cefe767dbb09e4c7577.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650',
    colours: '3',
    value: '1395',
    currency: 'GBP',
  },
  {
    id: 5,
    to: 'men/the-chelsea-short-heritage-trench-coat',
    style: 'Relaxed fit',
    name: 'The Chelsea – Short Heritage Trench Coat',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/92ea55699c48b240413fad64d86dc291e5956e35.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650',
    colours: '3',
    value: '1195',
    currency: 'GBP',
  },
  {
    id: 6,
    to: 'men/the-sandringham-mid-length-heritage-trench-coat',
    style: 'Classic fit',
    name: 'The Sandringham – Mid-length Heritage Trench Coat',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/937fe1f4ed9cfc7527f02c6c6a2f205e2bfead6b.jpg?$BBY_V2_ML_3X4$&hei=869&wid=652',
    colours: '3',
    value: '1295',
    currency: 'GBP',
  },
  {
    id: 7,
    to: 'men/the-chelsea-short-heritage-trench-coat',
    style: 'Relaxed fit',
    name: 'Extra-long Resin Button Cotton Gabardine Trench Coat',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/52d6c5c3ffb3052d73d8bad2927fa411ee0034cd.jpg?$BBY_V2_ML_3X4$&hei=869&wid=652',
    colours: '3',
    value: '1195',
    currency: 'GBP',
  },
  {
    id: 8,
    to: 'men/the-kensington-mid-length-heritage-trench-coat',
    style: 'Tailored fit',
    name: 'The Kensington – Mid-Length Heritage Trench Coat',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/9439d15db8902c494d3c55bcb4d50a89746da8d9.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650',
    colours: '4',
    value: '1295',
    currency: 'GBP',
  },
];

const singleBreastedTrenchCoats = [
  {
    id: 9,
    to: 'men/the-brighton-extra-long-car-coat',
    style: 'Relaxed fit',
    name: 'The Brighton – Extra-long Car Coat',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/70d0ea20f4faa00e90a0e70fed88af9cd4874824.jpg?$BBY_V2_ML_3X4$&hei=869&wid=652',
    colours: '7',
    value: '1395',
  },
  {
    id: 10,
    to: 'men/the-brighton-extra-long-car-coat',
    style: 'New in',
    name: 'The Brighton – Extra-long Car Coat',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/32792b6c9cf40c27ce446864bc6bae457d490199.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650',
    colours: '7',
    value: '1395',
  },
  {
    id: 11,
    to: 'men/the-brighton-extra-long-car-coat',
    style: 'Relaxed fit',
    name: 'The Brighton – Extra-long Car Coat',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/0c526ecde3443d15c60f660214d320ca4c338c88.jpg?$BBY_V2_ML_3X4$&hei=869&wid=652',
    colours: '7',
    value: '1395',
  },
  {
    id: 12,
    to: 'men/the-brighton-extra-long-car-coat',
    style: 'Online Exclusive',
    name: 'The Brighton – Extra-long Car Coat',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/98f1a84f2c171dfc4ffe373e13f5c258e4b79ea9.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650',
    colours: '7',
    value: '1395',
  },
  {
    id: 13,
    to: 'men/the-brighton-extra-long-car-coat',
    style: 'New in',
    name: 'The Brighton – Extra-long Car Coat',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/3bbc6df8655e77f5a75880f03c3ab3f7c92d2ee9.jpg?$BBY_V2_ML_3X4$&hei=869&wid=652',
    colours: '7',
    value: '1395',
  },
  {
    id: 14,
    to: 'men/the-brighton-extra-long-car-coat',
    style: 'New in',
    name: 'The Brighton – Extra-long Car Coat',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/b340592f566593645f37fd61fdafe720e2c224b7.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650',
    colours: '7',
    value: '1395',
  },
  {
    id: 15,
    to: 'men/the-brighton-extra-long-car-coat',
    style: 'New in',
    name: 'The Brighton – Extra-long Car Coat',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/499e46c07518da4b2d208164cb6202b415346661.jpg?$BBY_V2_ML_3X4$&hei=869&wid=652',
    colours: '7',
    value: '1395',
  },
  {
    id: 16,
    to: 'men/the-brighton-extra-long-car-coat',
    style: 'New in',
    name: 'The Brighton – Extra-long Car Coat',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/1297c5d67c810e003eed53e02959843669f1ce9c.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650',
    colours: '7',
    value: '1395',
  },
];

export default () =>
  (<section>
    <CatalogHeader />
    <Filter />
    <Container>
      <Helmet>
        <title>Men</title>
      </Helmet>
      <div>
        <SectionTitle>Heritage Trench Coats</SectionTitle>
        <XS>
          <Row>
            {heritageTrenchCoats.slice(0, 4).map(product =>
              (<Col xs="6" md="3" key={product.id}>
                <Card
                  to={product.to}
                  style={product.style}
                  name={product.name}
                  image={product.image}
                  alt={product.name}
                  colours={product.colours}
                  value={product.value}
                  currency={product.currency}
                />
              </Col>),
            )}
          </Row>
        </XS>
        <XSonly>
          <Row>
            {heritageTrenchCoats.map(product =>
              (<Col xs="6" md="3" key={product.id}>
                <Card
                  to={product.to}
                  style={product.style}
                  name={product.name}
                  image={product.image}
                  alt={product.name}
                  colours={product.colours}
                  value={product.value}
                  currency={product.currency}
                />
              </Col>),
            )}
          </Row>
        </XSonly>
        <XSonly>
          <Line />
        </XSonly>
        <SectionTitle>Single Breasted Trench Coats</SectionTitle>
        <XS>
          <Row>
            {singleBreastedTrenchCoats.slice(0, 4).map(product =>
              (<Col xs="6" md="3" key={product.id}>
                <Card
                  to={product.to}
                  style={product.style}
                  name={product.name}
                  image={product.image}
                  alt={product.name}
                  colours={product.colours}
                  value={product.value}
                  currency={product.currency}
                />
              </Col>),
            )}
          </Row>
        </XS>
        <XSonly>
          <Row>
            {singleBreastedTrenchCoats.map(product =>
              (<Col xs="6" md="3" key={product.id}>
                <Card
                  to={product.to}
                  style={product.style}
                  name={product.name}
                  image={product.image}
                  alt={product.name}
                  colours={product.colours}
                  value={product.value}
                  currency={product.currency}
                />
              </Col>),
            )}
          </Row>
        </XSonly>
      </div>
      <ShowMore currentlyShownCards={8} totalCards={17} />
    </Container>
  </section>);
