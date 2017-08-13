import React from "react";
import Responsive from "react-responsive";

export const LG = ({ children }) =>
  <Responsive maxWidth={992}>
    {children}
  </Responsive>;

export const MD = ({ children }) =>
  <Responsive maxWidth={992}>
    {children}
  </Responsive>;

export const XS = ({ children }) =>
  <Responsive maxWidth={768}>
    {children}
  </Responsive>;

export const LGonly = ({ children }) =>
  <Responsive minWidth={992}>
    {children}
  </Responsive>;

export const MDonly = ({ children }) =>
  <Responsive minWidth={992}>
    {children}
  </Responsive>;

export const XSonly = ({ children }) =>
  <Responsive minWidth={768}>
    {children}
  </Responsive>;
