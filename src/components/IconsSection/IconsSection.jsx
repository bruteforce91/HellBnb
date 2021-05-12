import React from "react";
import {
  IconsSectionWrapper,
  IconContainer,
  TextContainer,
  Title,
} from "./IconsSection.elements";

export default function IconsSection({ mobile, features, opsDays }) {
  const mapFeaturesIcons = {
    istant: "check circle",
    ADDVA_GUIDE: "heart",
    ADDVA_MEAL: "beer",
    ADDVA_ENTRAN: "bell",
  };

  return (
    <IconsSectionWrapper>
      <IconContainer>
        <i className="mobile icon align" />
        <TextContainer>
          <Title>
            voucher mobile
            {mobile === "MOBILE" ? " disponibile" : " non disponibile"}
          </Title>
        </TextContainer>
      </IconContainer>
      <IconContainer>
        <i className="calendar alternate icon align" />
        <TextContainer>
          <Title>
            {opsDays
              ? `disponibile ${opsDays.toLowerCase()}`
              : "attività non disponibile, controlla il calendario"}
          </Title>
        </TextContainer>
      </IconContainer>

      {features.map((feature) => (
        <IconContainer>
          <i className={`${mapFeaturesIcons[feature.code] || "magic"} icon`} />

          <TextContainer>
            <Title>{feature.name.toLowerCase()}</Title>
          </TextContainer>
        </IconContainer>
      ))}
    </IconsSectionWrapper>
  );
}
