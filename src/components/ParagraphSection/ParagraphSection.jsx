import React, { useState } from "react";
import {
  ParagraphBody,
  ParagraphContainer,
  ParagraphTitle,
  ToggleKeepReading,
} from "./ParagraphSection.elements";

export default function ParagraphSection({
  title,
  paragraphText,
  maxCharacters,
}) {
  const [keepReadingIsOpen, setKeepReadingIsOpen] = useState(false);

  const truncateText = () =>
    paragraphText.substr(0, maxCharacters - 1) +
    (paragraphText.length > maxCharacters ? " ..." : "");

  return (
    <ParagraphContainer>
      <ParagraphTitle>{title}</ParagraphTitle>
      {keepReadingIsOpen ? (
        <ParagraphBody>{paragraphText}</ParagraphBody>
      ) : (
        <ParagraphBody>{truncateText()}</ParagraphBody>
      )}
      {paragraphText.length > maxCharacters && (
        <ToggleKeepReading
          onClick={() => setKeepReadingIsOpen(!keepReadingIsOpen)}
        >
          {keepReadingIsOpen ? "Nascondi" : "Continua a leggere"}
        </ToggleKeepReading>
      )}
    </ParagraphContainer>
  );
}
