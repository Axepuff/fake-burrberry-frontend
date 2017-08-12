import React, { Component } from "react";

const Col = fucntion(props) {
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

const Container = fucntion(props) {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}


const Row = fucntion(props) {
  render() {
    return (
      <div className="row">
        {this.props.children}
      </div>
    );
  }
}

export {Col, Container, Col};
