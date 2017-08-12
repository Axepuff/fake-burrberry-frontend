import React, { Component } from "react";

class Col extends Component {
  render() {
    return (
      <div
        className={`col-xs-${this.props.xs} col-sm-${this.props
          .sm} col-md-${this.props.md} col-lg-${this.props.lg}`}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Col;
