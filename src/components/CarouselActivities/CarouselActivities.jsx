import React, { useRef, useState } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
// assets
import {
  WrapperCarousel,
  CarouselTitle,
  HeaderCarousel,
  NavigatorCarousel,
  CounterSlide,
  NavBtn,
  StyledLink,
} from "./CarouselActivities.elements";

// function getting dinamic window size
import useWindowDimensions from "./WindowSize";

const CarouselActivities = ({ activities, title }) => {
  const myRef = useRef(null);
  const scrollSpace = useWindowDimensions().width;

  const cardWidth = 210;
  const totalScroll = Math.ceil(
    (activities.length * cardWidth) / useWindowDimensions().width
  );

  const [scrollNum, setScrollNum] = useState(1);
  return (
    <div>
      {activities ? (
        <div>
          <HeaderCarousel>
            <CarouselTitle>{title}</CarouselTitle>
            {/* window size */}
            {useWindowDimensions().width >= 768 && (
              <NavigatorCarousel>
                <CounterSlide>
                  {" "}
                  {scrollNum}/{totalScroll}{" "}
                </CounterSlide>
                <NavBtn
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
            {activities.map((activity) => {
              const path = `/activities/${activity.uuid}`;
              return (
                <StyledLink to={path} key={activity.uuid}>
                  <ActivityCard
                    key={activity.uuid}
                    img={activity.cover_image_url}
                    rate={activity.reviews_avg}
                    number={activity.reviews_number}
                    country={activity.city?.country.name}
                    viewCountry
                    title={activity.title}
                    price={activity.retail_price.formatted_value}
                  />
                </StyledLink>
              );
            })}
          </WrapperCarousel>{" "}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
export default CarouselActivities;
