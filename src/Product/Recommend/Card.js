import React from "react";
import styled from "styled-components";

const Card = styled.a`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 0.5rem;
  padding-bottom: 1.5rem;
  text-decoration: none;
  color: #171717;
  ::visited {
    color: #171717;
  }
`;

const Img = styled.img`
  max-height: 174px;
  width: auto;
  display: block;
  margin-bottom: 0.5rem;
  @media screen and (min-width: 48rem) {
    width: 100%;
    height: auto;
    max-height: none;
    max-width: none;
  }
`;

const Title = styled.span`
  font-family: 'Lora', 'Arial', serif;
  font-size: 1rem;
  line-height: 1.19;
  text-align: left;
  color: #171717;
  margin-bottom: 0.5rem;
`;

const Price = styled.span`
  font-size: 0.75rem;
  line-height: 1.2;
  text-align: left;
  color: #999999;
  margin-left: 1px;
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  @media screen and (min-width: 48rem) {
    margin-left: 0;
  }
`;

export default function(props) {
  return (
    <Card href={props.href}>
      <Img alt={props.name} src={props.src} />
      <Title>
        {props.name}
      </Title>
      <Price>
        {props.price}
      </Price>
    </Card>
  );
}
