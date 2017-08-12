import React from "react";
import styled from "styled-components";
import HelpLink from "../../common/HelpLink";

const Container = styled.div`margin-bottom: 2rem;`;

const Current = styled.div`
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.75rem;
  line-height: 1.35;
  color: #171717;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 1rem;
`;

const Button = styled.button`
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  width: 43px;
  height: 32px;
  border-radius: 2px;
  border: solid 1px #171717;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  margin-right: 0.5rem;
  font-size: 0.75rem;
  line-height: 1.35;
  color: #171717;
`;

export default () => {
  return (
    <Container>
      <Wrapper>
        <Current>Size: XL</Current>
        <HelpLink />
      </Wrapper>
      <Buttons>
        <Button>S</Button>
        <Button>M</Button>
        <Button>L</Button>
        <Button>XL</Button>
      </Buttons>
    </Container>
  );
};
