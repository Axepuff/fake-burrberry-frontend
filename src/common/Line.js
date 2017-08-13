import styled from "styled-components";

export const Line = styled.hr`
  right: 50%;
  left: 50%;
  position: relative;
  margin: 0;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 0;
  width: 100vw;
  height: 1px;
  background-color: #c6c6c6;
  border: none;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;
