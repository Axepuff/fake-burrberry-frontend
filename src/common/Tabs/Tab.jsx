import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const TabStyled = styled(NavLink)`
  display: inline-block;
  padding: 1rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: #999;
  border-bottom: solid 1px 'transparent';
  text-decoration: none;
  &.active {
    color: #171717;
    border-bottom: solid 1px #171717;
  }
`;

const Tab = props =>
  (<TabStyled to={props.to}>
    {props.children}
  </TabStyled>);

Tab.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Tab;
