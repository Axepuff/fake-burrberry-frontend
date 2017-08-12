import styled from "styled-components";

const Button = styled.button`
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  border-radius: 2px;
  background-color: #171717;
  border: solid 1px #171717;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 0.75rem;
  display: block;
  width: 100%;
  padding: 1rem 0;
  line-height: 1.2;
  background: ${props => (props.primary ? "#171717" : "#fff")};
  border: solid 1px ${props => (props.primary ? "#171717" : "#999")};
  color: ${props => (props.primary ? "#fff" : "#171717")};
`;

export default Button;
