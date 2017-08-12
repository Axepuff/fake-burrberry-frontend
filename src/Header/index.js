import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const Logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #c6c6c6;
  padding: 1rem 0;
  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0;
  }
  padding: 1rem 0;
  @media screen and (min-width: 62rem) {
    padding: 2rem 0;
  }
`;

const Image = styled.img`@media screen and (min-width: 62rem) {height: 1rem;}`;

export default () => {
  return (
    <header>
      <Logo href="/">
        <Image src={logo} alt="Burberry" />
      </Logo>
    </header>
  );
};
