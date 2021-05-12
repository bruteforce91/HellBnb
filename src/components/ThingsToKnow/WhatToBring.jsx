import React from "react";
import {
  SectionTitle,
  InfoParagraph,
  ModalListItem,
} from "./ThingsToKnow.elements";

export default function WhatToBring() {
  return (
    <>
      <SectionTitle modalType>Cosa portare</SectionTitle>

      <ul>
        <ModalListItem>
          <i className="check circle outline icon" />
          <InfoParagraph listType modalType>
            Camera
          </InfoParagraph>
        </ModalListItem>
        <ModalListItem>
          <i className="check circle outline icon" />
          <InfoParagraph listType modalType>
            Mancia per lo sviluppatore
          </InfoParagraph>
        </ModalListItem>
      </ul>
    </>
  );
}
