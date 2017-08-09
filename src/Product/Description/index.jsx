import React, { Component } from "react";
import Button from "./Button";
import Line from "../../common/Line";

export default () => {
  return (
    <div className="product-desc">
      <Button title="DESCRIPTION" />
      <Line />
      <Button title="SHIPPING & RETURNS" />
      <Line />
    </div>
  );
};
