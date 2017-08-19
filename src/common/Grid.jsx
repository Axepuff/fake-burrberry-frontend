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

Col.propTypes = {
  children: PropTypes.element.isRequired,
  xs: PropTypes.element.isRequired,
  sm: PropTypes.element.isRequired,
  md: PropTypes.element.isRequired,
  lg: PropTypes.element.isRequired,
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

Row.propTypes = {
  children: PropTypes.element.isRequired,
  position: PropTypes.element.isRequired,
};

export { Col, Container, Row };
