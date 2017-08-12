import React from "react";
import styled from "styled-components";

const HelpLink = styled.button`
  border: 0;
  background: transparent;
  font-size: 0.75rem;
  text-transform: uppercase;
  padding: 0;
  cursor: pointer;
  display: flex;
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  line-height: 1.4;
`;

export default () => {
  return <HelpLink type="button">NEED SIZE HELP?</HelpLink>;
};
