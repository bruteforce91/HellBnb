import React, { useRef, useState } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import CityCard from "../CityCard/CityCard";
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

const CarouselActivities = ({ activities, title, cities }) => {
  const myRef = useRef(null);
  const scrollSpace = useWindowDimensions().width;
  let totalScroll = 0;
  const cardWidth = 210;
  if (activities) {
    totalScroll = Math.ceil(
      (activities.length * cardWidth) / useWindowDimensions().width
    );
  } else {
    totalScroll = Math.ceil(
      (cities.length * cardWidth) / useWindowDimensions().width
    );
  }

  const [scrollNum, setScrollNum] = useState(1);
  return (
    <div>
      {activities || cities ? (
        <div>
          {activities ? (
            <HeaderCarousel activity="activity">
              <CarouselTitle>{title}</CarouselTitle>
              {/* window size */}
              {useWindowDimensions().width >= 768 && (
                <NavigatorCarousel>
                  <CounterSlide>
                    {" "}
                    {scrollNum}/{totalScroll}{" "}
                  </CounterSlide>
                  {scrollNum > 1 && (
                    <>
                      <NavBtn
                        left
                        show
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
                    </>
                  )}
                  <NavBtn
                    show={scrollNum < totalScroll}
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
          ) : (
            <>
              <HeaderCarousel>
                <CarouselTitle>Esperienze in altre città</CarouselTitle>
                {/* window size */}
                {useWindowDimensions().width >= 768 && (
                  <NavigatorCarousel cities="cities">
                    <NavBtn
                      show={scrollNum > 1}
                      left
                      onClick={() => {
                        myRef.current.scrollLeft -= scrollSpace;
                        if (scrollNum > 0) {
                          setScrollNum(scrollNum - 1);
                        }
                      }}
                    >
                      <span>
                        <i className="tiny chevron left icon" />
                      </span>
                    </NavBtn>
                    <NavBtn
                      show={scrollNum < totalScroll}
                      cities
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
            </>
          )}
          <WrapperCarousel ref={myRef}>
            {activities ? (
              <>
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
              </>
            ) : (
              <>
                {cities.map((city) => (
                  <CityCard
                    key={city.uuid}
                    img={city.cover_image_url}
                    city={city.name}
                  />
                ))}
              </>
            )}
          </WrapperCarousel>{" "}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
export default CarouselActivities;
