import React from "react";

const Col = props => {
  return (
    <div
      className={`col-xs-${props.xs} col-sm-${props.sm} col-md-${props.md} col-lg-${props.lg}`}
    >
      {props.children}
    </div>
  );
};

const Nav = props => {
  return (
    <nav
      className={`col-xs-${props.xs} col-sm-${props.sm} col-md-${props.md} col-lg-${props.lg}`}
    >
      {props.children}
    </nav>
  );
};

const Container = props => {
  return (
    <div className="container">
      {props.children}
    </div>
  );
};

const Row = props => {
  return (
    <div className={`row ${props.position}`}>
      {props.children}
    </div>
  );
};

export { Col, Container, Row, Nav };
