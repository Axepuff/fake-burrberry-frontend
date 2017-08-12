import React from "react";
import styled from "styled-components";

const More = styled.div`@media screen and (min-width: 48rem) {display: none;}`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.19;
  text-align: left;
  color: #171717;
  display: inline-block;
  margin: 0;
  padding: 0;
  border-bottom: solid 1px #171717;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
`;

const Link = styled.a`
  font-family: 'Lora', 'Arial', serif;
  font-size: 0.875rem;
  font-style: italic;
  line-height: 1.25;
  text-align: left;
  color: #171717;
  text-decoration: none;
  display: block;
  margin-bottom: 1rem;
  ::last-child {
    margin-bottom: 0;
  }
`;

export default () => {
  return (
    <More>
      <Title>MORE FOR YOU</Title>
      <Link href="#">Men’s Black Trench Coats</Link>
      <Link href="#">Men’s Short Trench Coats</Link>
      <Link href="#">Men’s Long Trench Coats</Link>
    </More>
  );
};
