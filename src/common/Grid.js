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

class Container extends Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

class Row extends Component {
  render() {
    return (
      <div className={`row bottom-${this.props.bottom}`}>
        {this.props.children}
      </div>
    );
  }
}

export { Col, Container, Row };
