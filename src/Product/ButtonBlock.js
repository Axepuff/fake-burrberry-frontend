import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { MD } from "../common/Responsive";
import HelpLink from "../common/HelpLink";

const BtnBlock = styled.div`
  padding: 2rem 0.5rem 3rem;
  @media screen and (min-width: 48rem) {
    padding: 2rem 0 3rem;
    border: 0;
  }
`;

export default () => {
  return (
    <MD>
      <BtnBlock>
        <Button primary type="button">
          SELECT A SIZE
        </Button>
        <Button type="button">FIND IN STORE</Button>
        <HelpLink />
      </BtnBlock>
    </MD>
  );
};
