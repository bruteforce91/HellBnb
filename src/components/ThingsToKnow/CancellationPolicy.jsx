import React from "react";
import { SectionTitle, InfoParagraph, InfoLink } from "./ThingsToKnow.elements";

export default function CancellationPolicy({ link, content }) {
  return (
    <>
      <SectionTitle modalType>Termini di cancellazione</SectionTitle>

      <InfoParagraph modalType>{content}</InfoParagraph>

      <InfoLink href={link}>Mostra i termini</InfoLink>
    </>
  );
}
