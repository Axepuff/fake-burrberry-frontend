import React from 'react';
import PropTypes from 'prop-types';

const Col = props =>
  (<div className={`col-xs-${props.xs} col-sm-${props.sm} col-md-${props.md} col-lg-${props.lg}`}>
    {props.children}
  </div>);

const Container = props =>
  (<div className="container">
    {props.children}
  </div>);

const Row = props =>
  (<div className={`row ${props.position}`}>
    {props.children}
  </div>);

const Box = props =>
  (<div className="box">
    {props.children}
  </div>);

Col.propTypes = {
  children: PropTypes.node.isRequired,
  xs: PropTypes.string.isRequired,
  sm: PropTypes.string.isRequired,
  md: PropTypes.string.isRequired,
  lg: PropTypes.string.isRequired,
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.node.isRequired,
};

export { Col, Container, Row, Box };
