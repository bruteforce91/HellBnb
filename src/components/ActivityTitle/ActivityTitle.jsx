import React from "react";
import {
  ActivityTitleWrapper,
  ActivityTitleText,
  ShareButton,
  Span,
  Dot,
  CountryTitle,
  RankingWrap,
  Container,
} from "./styles";

import Rank from "../Rank/Rank";

function ActivityTitle({ title, rate, number, country }) {
  return (
    <ActivityTitleWrapper>
      <ActivityTitleText>{title}</ActivityTitleText>
      <Container>
        <RankingWrap>
          <Rank
            light={false}
            underline
            bold
            margin
            rate={rate}
            number={number}
          />
          <Dot>·</Dot>
          <CountryTitle light={false}>{country}</CountryTitle>
        </RankingWrap>
        <ShareButton type="button">
          <i className="share square icon" />
          <Span>Condividi</Span>
        </ShareButton>
      </Container>
    </ActivityTitleWrapper>
  );
}

export default ActivityTitle;
