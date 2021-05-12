import React from "react";
import { CoverHero, CoverImg, HeroWrapper } from "./Hero.element";

function Hero({ coverUrl, CoverImage }) {
  return (
    <HeroWrapper>
      {CoverImage === undefined ? (
        <CoverHero>
          <CoverImg src={coverUrl} />
        </CoverHero>
      ) : (
        <>
          <CoverHero img={coverUrl} />
        </>
      )}
    </HeroWrapper>
  );
}

export default Hero;
