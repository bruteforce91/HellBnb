import React from "react";
import Rank from "../Rank/Rank";

// assets
import {
  CardWrapper,
  Img,
  TextWrapper,
  Title,
  Bold,
  Detail,
  Country,
  RankCountryWrapper,
  Dot,
} from "./ActivityCard.elements";

const ActivityCard = ({
  img,
  rate,
  number,
  country,
  viewCountry,
  title,
  price,
}) => (
  <CardWrapper>
    <Img img={img} />
    <TextWrapper>
      <RankCountryWrapper>
        {!!rate && <Rank rate={rate} number={number} margin light />}
        {!!rate && viewCountry && <Dot>·</Dot>}
        {viewCountry && <Country>{country}</Country>}
      </RankCountryWrapper>
      <Title>{title}</Title>
      <Detail>
        <Bold>A partire da {price}€</Bold> a persona
      </Detail>
    </TextWrapper>
  </CardWrapper>
);
export default ActivityCard;
