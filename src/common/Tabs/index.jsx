import React from 'react';
import Tab from './Tab';

export default () =>
  (<nav>
    <Tab to="/women">WOMEN</Tab>
    <Tab to="/men">MEN</Tab>
    <Tab to="/children">CHILDREN</Tab>
    <Tab to="/beauty">BEAUTY</Tab>
    <Tab to="/experience">EXPERIENCE</Tab>
  </nav>);
