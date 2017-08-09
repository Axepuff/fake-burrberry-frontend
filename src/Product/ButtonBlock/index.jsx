import React, { Component } from "react";
import Button from "../../common/Button.jsx";
import HelpLink from "../../common/HelpLink.jsx";

export default () => {
  return (
    <div className="product-btn-block">
      <Button type="primary" text="SELECT A SIZE" />
      <Button type="secondary" amount="last" text="FIND IN STORE" />
      <HelpLink />
    </div>
  );
};
