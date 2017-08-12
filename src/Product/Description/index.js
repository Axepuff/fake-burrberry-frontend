import React from "react";
import ToggleButton from "./Button";
import Line from "../../common/Line";
import { XS } from "../../common/Responsive";

export default () => {
  return (
    <div>
      <ToggleButton title="DESCRIPTION" />
      <XS>
        <Line />
        <ToggleButton title="SHIPPING & RETURNS" />
        <Line />
      </XS>
    </div>
  );
};
