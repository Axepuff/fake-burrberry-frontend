import React from "react";
import styled from "styled-components";
import HelpLink from "../../common/HelpLink";
import Button from "../../common/Button";

const Container = styled.div`margin-bottom: 2rem;`;

const Size = styled.span`
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.75rem;
  line-height: 1.35;
  color: #171717;
`;

const SizeValue = Size.extend`font-weight: 700;`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 1rem;
`;

export default () => {
  return (
    <Container>
      <Wrapper>
        <Size>
          Size: <SizeValue>XL</SizeValue>
        </Size>
        <HelpLink />
      </Wrapper>
      <Buttons>
        <Button small>S</Button>
        <Button small>M</Button>
        <Button small>L</Button>
        <Button small>XL</Button>
      </Buttons>
    </Container>
  );
};
