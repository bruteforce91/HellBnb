import React from "react";
import { CityCardWrapper, CityImg, CityName } from "./CityCard.elements";

const CityCard = ({ img, city }) => (
  <CityCardWrapper>
    <CityImg img={img} />
    <CityName>{city}</CityName>
  </CityCardWrapper>
);
export default CityCard;
