import React, { Component } from "react";
import styled from "styled-components";
import triangle from "../../assets/icons/triangle.svg";

export const Button = styled.button`
  width: 100%;
  padding: 0;
  background: transparent;
  border: 0;
  outline: none;
  @media screen and (min-width: 48rem) {
    border-bottom: 0;
  }
`;

export const Title = styled.h2`
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 400;
  line-height: 1.25;
  position: relative;
  font-family: 'Raleway', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  ::after {
    content: '';
    background: #fff url(${triangle}) no-repeat center;
    width: 10px;
    height: 20px;
    top: 2rem;
    right: 1rem;
    ${props => (props.active ? "transform: rotate(180deg);" : "")};
  }
  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0rem 1rem;
    ::after {
      display: none;
    }
  }
`;

export const Content = styled.div`
  text-align: left;
  padding: 0 0.5rem 2rem;
  display: ${props => (props.active ? `block` : "none")};
  @media screen and (min-width: 48rem) {
    display: block;
    padding: 0 0 1.5rem;
  }
  p {
    font-family: 'Lora', 'Arial', serif;
    line-height: 1.77;
    font-size: 0.875rem;
    text-align: left;
    margin: 0;
    color: #171717;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 1.75;
    font-size: 0.875rem;
    padding-top: 0.4rem;
  }
  ul li {
    font-family: 'Lora', 'Arial', serif;
  }
`;

class ToggleButton extends Component {
  constructor(props) {
    super();
    this.state = {
      active: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((state, props) => ({
      active: !state.active
    }));
    console.log("Hello");
  }
  render() {
    return (
      <Button type="button">
        <Title onClick={this.toggle} active={this.state.active}>
          {this.props.title}
        </Title>
        <Content active={this.state.active}>
          <p>A refined car coat crafted in protective cotton gabardine.</p>
          <p>
            Invented by Thomas Burberry in 1879, cotton gabardine is a tightly
            woven and breathable fabric that protects against wind and rain.
          </p>
          <p>
            Raglan sleeves and a concealed button closure complement the clean
            tailored lines.
          </p>
          <p>The piece is finished with a distinctive check undercollar.</p>
          <br />
          <ul>
            <li>
              Coat length: 98cm/38.6in. This is based on a size UK 48 as
              proportions change slightly according to size.
            </li>
            <li>Outer: 100% cotton</li>
            <li>Check lining: 100% cotton</li>
            <li>Sleeve lining: 100% viscose</li>
            <li>Buttons: buffalo horn</li>
            <li>Specialist dry clean</li>
            <li>Made in Europe</li>
            <li>Item 39428531</li>
          </ul>
        </Content>
      </Button>
    );
  }
}

export default ToggleButton;
