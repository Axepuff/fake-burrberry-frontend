import React from 'react';
import Responsive from 'react-responsive';
import PropTypes from 'prop-types';

const LG = props =>
  (<Responsive maxWidth={992}>
    {props.children}
  </Responsive>);

const MD = props =>
  (<Responsive maxWidth={992}>
    {props.children}
  </Responsive>);

const XS = props =>
  (<Responsive maxWidth={768}>
    {props.children}
  </Responsive>);

const LGonly = props =>
  (<Responsive minWidth={992}>
    {props.children}
  </Responsive>);

const MDonly = props =>
  (<Responsive minWidth={992}>
    {props.children}
  </Responsive>);

const XSonly = props =>
  (<Responsive minWidth={768}>
    {props.children}
  </Responsive>);

LG.propTypes = {
  children: PropTypes.element.isRequired,
};

MD.propTypes = {
  children: PropTypes.element.isRequired,
};

XS.propTypes = {
  children: PropTypes.element.isRequired,
};

LGonly.propTypes = {
  children: PropTypes.element.isRequired,
};

MDonly.propTypes = {
  children: PropTypes.element.isRequired,
};

XSonly.propTypes = {
  children: PropTypes.element.isRequired,
};

export { LG, MD, XS, LGonly, MDonly, XSonly };
