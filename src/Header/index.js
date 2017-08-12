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
`;
export default () => {
  return (
    <header>
      <Logo href="/">
        <img src={logo} alt="Burberry" />
      </Logo>
    </header>
  );
};
