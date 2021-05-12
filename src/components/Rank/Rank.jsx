import React from "react";
import { RateWrapper, Rate } from "./Rank.elements";

function Rank({ rate, number, margin, light }) {
  return (
    <RateWrapper>
      <i className="star icon primaryColor" />
      <Rate margin={margin}>{rate}</Rate>
      <Rate margin={margin} light={light}>
        ({number})
      </Rate>
    </RateWrapper>
  );
}
export default Rank;
