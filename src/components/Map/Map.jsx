import React from "react";
import {
  SectionHeader,
  SectionContainer,
  SubContainer,
  MapWindow,
  MapContainer,
  MapWindowInfo,
  InfoHeader,
  InfoDesc,
  ActivityDescription,
} from "./Map.elements";
import GoogleMap from "./GoogleMap";

export default function Map({ activityData }) {
  const { latitude, longitude, city } = activityData;
  const meetingPoint = activityData.meeting_point;
  const checkCoords = !!(latitude && longitude);
  const country = city.country.name;

  if (!(checkCoords || meetingPoint)) {
    return null;
  }
  // test2
  return (
    <SectionContainer>
      <SubContainer>
        <SectionHeader>
          {checkCoords ? "Dove ti troverai" : "Come trovarci"}
        </SectionHeader>

        {checkCoords && (
          <MapWindow>
            <MapContainer>
              <GoogleMap latitude={latitude} longitude={longitude} />
            </MapContainer>

            <MapWindowInfo>
              <InfoHeader>Dove ci incontreremo</InfoHeader>
              <InfoDesc>
                {city.name}, {country}
              </InfoDesc>
            </MapWindowInfo>
          </MapWindow>
        )}

        <ActivityDescription>{meetingPoint}</ActivityDescription>
      </SubContainer>
    </SectionContainer>
  );
}
