import React from "react";
import ToggleButton from "./Button";
import Line from "../../common/Line";

const MediaQuery = require("react-responsive");

export default () => {
  return (
    <div>
      <ToggleButton title="DESCRIPTION" />
      <Line />
      <MediaQuery maxWidth={768}>
        <ToggleButton title="SHIPPING & RETURNS" hidden />
        <Line />
      </MediaQuery>
    </div>
  );
};
