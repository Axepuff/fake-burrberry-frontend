import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        type="button"
        className={`btn btn_${this.props.type} btn_${this.props.amount}`}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
