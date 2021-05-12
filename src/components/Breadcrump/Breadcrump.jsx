import React from "react";
import {
  BreadcrumpContainer,
  AnchorTag,
  Icon,
  ActivityType,
} from "./Breadcrump.elements";

export default function Breadcrump({ activityInfo }) {
  const cityName = activityInfo.city.name;
  const cityUrl = activityInfo.city.url;
  const countryName = activityInfo.city.country.name;
  const activityType = activityInfo.verticals[0].name;
  const getCategory = activityInfo.categories[0];
  const activityCategory = getCategory.name;
  const activityCategoryUrl = getCategory.url;

  if (
    !cityName ||
    !cityUrl ||
    !countryName ||
    !activityType ||
    !getCategory ||
    !activityCategory ||
    !activityCategoryUrl
  )
    return null;

  return (
    <BreadcrumpContainer>
      <AnchorTag href={cityUrl}>
        {cityName}, {countryName}
        <Icon>
          <i className="small chevron right icon" />
        </Icon>
      </AnchorTag>
      <AnchorTag href={activityCategoryUrl}>
        {activityCategory}
        <Icon>
          <i className=" chevron right icon" />
        </Icon>
      </AnchorTag>
      <ActivityType>{activityType}</ActivityType>
    </BreadcrumpContainer>
  );
}
