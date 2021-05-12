import React from "react";
import { SectionTitle, InfoParagraph } from "./ThingsToKnow.elements";

export default function GuestRequisite() {
  return (
    <>
      <SectionTitle modalType>Requisiti degli ospiti</SectionTitle>

      <InfoParagraph modalType>
        Possono partecipare fino a 6 ospiti di almeno 4 anni. Inoltre, i
        genitori possono portare figli di età inferiore a 2 anni.
      </InfoParagraph>

      <InfoParagraph modalType>
        Tutti i partecipanti, host inclusi, devono indossare un dispositivo di
        protezione per il viso.
      </InfoParagraph>

      <InfoParagraph modalType>
        Mantieni una distanza fisica di sicurezza tra te e le altre persone.
        Quando incontri il tuo host e gli altri ospiti, al posto di strette di
        mano e abbracci, scegli un saluto che non richiede un contatto.
      </InfoParagraph>

      <InfoParagraph modalType>
        Spetta a ogni ospite informarsi sugli ingredienti utilizzati e
        comunicare eventuali allergie o restrizioni alimentari all&apos;host.
        Gli ospiti devono inoltre considerare che il consumo di cibi crudi o
        poco cotti, come carne, pollame, frutti di mare, crostacei o uova, può
        aumentare il rischio di malattie di origine alimentare
      </InfoParagraph>

      <InfoParagraph modalType>
        Nessuna competenza professionale è richiesta.
      </InfoParagraph>
    </>
  );
}
