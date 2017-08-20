import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import { Link } from 'react-router-dom';
import heart from '../assets/icons/heart.svg';

const ImageLink = styled(Link)`
  flex-direction: column;
  display: flex;
  margin: 0;
  color: #171717;
  text-align: left;
  text-decoration: none;
  @media only screen and (min-width: 48rem) {
    margin: 0;
  }
`;

const Info = styled.div`
  flex-direction: column;
  display: flex;
  margin: 0 0 2rem;
  color: #171717;
  text-align: left;
  text-decoration: none;
  @media only screen and (min-width: 48rem) {
    margin: 0;
  }
`;

const Details = styled.div`
  display: block;
  width: calc(100%);
  @media only screen and (min-width: 48rem) {
    width: calc(100% - 2rem);
  }
`;

const Image = styled.img`
  width: 100%;
  min-height: 12.25rem;
  margin: 0 0 1rem;
  @media only screen and (min-width: 62rem) {
    min-height: 19.625rem;
  }
`;

const TitleWrapper = styled(Link)`
  display: flex;
  color: #171717;
  text-decoration: none;
  margin-bottom: 0.5rem;
  @media only screen and (min-width: 48rem) {
    margin: 0 0 0.75rem;
  }
  @media only screen and (min-width: 62rem) {
    margin: 0 0 0.55rem;
  }
`;

const Title = styled.p`
  margin: 0;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  font-weight: 600;
  color: #171717;
  @media only screen and (min-width: 48rem) {
    font-size: .875rem;
    line-height: 1.43;
  }
  @media only screen and (min-width: 62rem) {
    font-size: 1rem;
    line-height: 1.25;
  }
`;

const Style = styled.p`
  vertical-align: top;
  display: inline-block;
  min-height: 1rem;
  margin: 0 0 0.5rem;
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: 400;
  line-height: 1.35;
  @media only screen and (min-width: 62rem) {
    margin: 0 0 0.55rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Label = styled.p`
  margin: 0 0 0.3125rem;
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.33;
  @media only screen and (min-width: 48rem) {
    margin: 0;
  }
`;

const Colours = styled.div`
  margin: 0 0 0.25rem;
  @media only screen and (min-width: 62rem) {
    margin: 0 0 .35rem;
  }
`;

const Color = styled.button`
  padding: 0;
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 1.33;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #171717;
  cursor: pointer;
`;

const Price = styled.p`
  margin: 0;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.17;
  @media only screen and (min-width: 48rem) {
    margin: 0 0 2.05rem;
  }
  @media only screen and (min-width: 62rem) {
    margin: 0 0 2rem;
  }
`;

const FavoriteWrapper = styled.button`
  vertical-align: top;
  display: inline-block;
  float: right;
  padding: 0;
  margin-left: 0.25rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Favorite = styled.img`display: block;`;
const Card = props =>
  (<div>
    <ImageLink to={props.to}>
      <Image src={props.image} alt={props.alt} />
    </ImageLink>
    <Wrapper>
      <Info>
        <Details>
          {props.style !== ' ' &&
            <Style>
              {props.style}
            </Style>}
          <FavoriteWrapper>
            <Favorite src={heart} />
          </FavoriteWrapper>
          <TitleWrapper to={props.to}>
            <Title>
              {props.name}
            </Title>
          </TitleWrapper>
          <Colours colours={props.colours}>
            <Label>
              Available in&nbsp;
              <Color>{props.colours} colours</Color>
            </Label>
          </Colours>
          <Price>
            <FormattedNumber
              value={props.value}
              style="currency" // eslint-disable-line
              currency={props.currency}
              currencyDisplay="symbol"
              minimumFractionDigits={0}
              maximumFractionDigits={0}
            />
          </Price>
        </Details>
      </Info>
    </Wrapper>
  </div>);

Card.defaultProps = {
  style: '  ',
  colours: 1,
};

Card.propTypes = {
  to: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  colours: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Card;
