import React from 'react';

const Col = props => (
  <div
    className={`col-xs-${props.xs} col-sm-${props.sm} col-md-${props.md} col-lg-${props.lg}`}
  >
    {props.children}
  </div>
);

const Container = props => (
  <div className="container">
    {props.children}
  </div>
);

const Row = props => (
  <div className={`row ${props.position}`}>
    {props.children}
  </div>
);

export { Col, Container, Row };
