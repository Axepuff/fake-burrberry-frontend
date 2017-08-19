import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  margin-right: 1rem;
  width: 40px;
  height: 40px;
  font-size: 0;
  border-radius: 50%;
  border: ${props => (props.active ? 'solid 1px #232122' : 'none')};
  background-color: ${props => props.value};
`;

class ButtonColor extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({
      active: !state.active,
    }));
  }
  render() {
    return (
      <Button
        value={this.props.value}
        onClick={this.toggle}
        active={this.state.active}
        type="button"
      >
        {this.props.name} color
      </Button>
    );
  }
}

ButtonColor.propTypes = {
<<<<<<< HEAD
  value: PropTypes.element.isRequired,
  name: PropTypes.element.isRequired,
=======
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
>>>>>>> feat/eslint_travis
};

export default ButtonColor;
