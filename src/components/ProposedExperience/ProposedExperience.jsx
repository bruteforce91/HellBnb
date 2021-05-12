import React from "react";
import { Wrap } from "./ProposedExperience.elements";
import { ParagraphTitle } from "../ParagraphSection/ParagraphSection.elements";

function ProposedExperience({ children, selectedActivity }) {
  return (
    <>
      <ParagraphTitle noMarginBottom="noMarginBottom">
        {`Esperienza proposta da ${selectedActivity.seller_gateway.name}`}
      </ParagraphTitle>
      <Wrap>{children}</Wrap>
    </>
  );
}

export default ProposedExperience;
