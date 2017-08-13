import React from "react";
import Accordion from "./Accordion";
import { Line } from "../../common/Line";
import { XS } from "../../common/Responsive";

export default () => {
  return (
    <div>
      <Accordion title="DESCRIPTION" />
      <XS>
        <Line />
        <Accordion title="SHIPPING & RETURNS" />
        <Line />
      </XS>
    </div>
  );
};
