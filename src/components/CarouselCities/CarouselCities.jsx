import React, { useRef, useState } from "react";
import CityCard from "../CityCard/CityCard";
// assets
import {
  WrapperCarousel,
  CarouselTitle,
  HeaderCarousel,
  NavigatorCarousel,
  NavBtn,
} from "./CarouselCities.elements";

// function getting dinamic window size
import useWindowDimensions from "../CarouselActivities/WindowSize";

const CarouselCities = ({ cities }) => {
  const myRef = useRef(null);
  const scrollSpace = useWindowDimensions().width;

  const cardWidth = 140;
  const totalScroll = Math.ceil(
    (cities.length * cardWidth) / useWindowDimensions().width
  );

  const [scrollNum, setScrollNum] = useState(1);
  return (
    <div>
      {cities ? (
        <div>
          <HeaderCarousel>
            <CarouselTitle>Esperienze in altre città</CarouselTitle>
            {/* window size */}
            {useWindowDimensions().width >= 768 && (
              <NavigatorCarousel>
                <NavBtn
                  show={scrollNum !== 1}
                  left
                  onClick={() => {
                    myRef.current.scrollLeft -= scrollSpace;
                    if (scrollNum > 1) {
                      setScrollNum(scrollNum - 1);
                    }
                  }}
                >
                  <span>
                    <i className="tiny chevron left icon" />
                  </span>
                </NavBtn>
                <NavBtn
                  show={scrollNum !== totalScroll}
                  onClick={() => {
                    myRef.current.scrollLeft += scrollSpace;
                    if (scrollNum < totalScroll) {
                      setScrollNum(scrollNum + 1);
                    }
                  }}
                >
                  <span>
                    <i className="tiny chevron right icon" />
                  </span>
                </NavBtn>
              </NavigatorCarousel>
            )}
          </HeaderCarousel>
          <WrapperCarousel ref={myRef}>
            {cities.map((city) => (
              //   const path = `/activities/${activity.uuid}`;
              //   return (
              // <StyledLink to={path} key={activity.uuid}>
              <CityCard
                key={city.uuid}
                img={city.cover_image_url}
                city={city.name}
              />
              // </StyledLink>
              //   );
            ))}
          </WrapperCarousel>{" "}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
export default CarouselCities;
