import React, { useState, useEffect } from "react";
import { fetchActivityRefundPolicy } from "../../services/api";
import CancellationPolicy from "./CancellationPolicy";
import GuestRequisite from "./GuestRequisite";
import {
  InfoContainer,
  InfoSubContainer,
  InfoTitle,
  InfoParagraph,
  InfoWrapper,
  LinkContainer,
  SectionTitle,
  InfoLink,
  InfoSection,
} from "./ThingsToKnow.elements";
import UpSlideModal from "./UpSlideModal";
import WhatToBring from "./WhatToBring";

export default function ThingsToKnow({ activityUuid }) {
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [modalCloseDirectives, setModalCloseDirectives] = useState({
    contentFunc: undefined,
    funcState: undefined,
  });
  const [refundResponse, setRefundResponse] = useState(undefined);
  const [cancellationPolicyContent, setCancellationPolicyContent] = useState(
    false
  );
  const [guestsRequisiteContent, setGuestsRequisiteContent] = useState(false);
  const [whatToTakeContent, setWhatToTakeContent] = useState(false);

  const cancellationLink =
    "https://www.airbnb.it/help/article/1593/quali-sono-i-termini-di-cancellazione-delle-esperienze-airbnb";

  const cancellationInfo = refundResponse
    ? "È possibile cancellare e ottenere il rimborso totale di qualsiasi esperienza entro 24 ore dall'acquisto o almeno 7 giorni prima dell'inizio dell'esperienza stessa."
    : "Non è possibile cancellare e ottenere il rimborso.";

  function toggleModal(contentFunc, funcState) {
    if (isModalOpen) {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "hidden";
    }

    setisModalOpen(!isModalOpen);
    contentFunc(!funcState);
    setModalCloseDirectives({ contentFunc, funcState });
  }

  function mobileOpenModalBehaviour(contentFunc, funcState) {
    if (widthWindow < 768) {
      toggleModal(contentFunc, funcState);
    }
  }

  useEffect(() => {
    const handleResize = () => setWidthWindow(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    const fetchActivityRefundInfo = async () => {
      try {
        const response = await fetchActivityRefundPolicy(activityUuid);
        if (response.status < 400) {
          setRefundResponse(true);
        } else {
          setRefundResponse(false);
        }
      } catch (error) {
        throw new Error("Something went wrong during Fetch calls");
      }
    };
    fetchActivityRefundInfo();
  }, []);

  return (
    <InfoSection>
      {widthWindow >= 768 && <SectionTitle>Cose da sapere</SectionTitle>}

      <InfoWrapper>
        <InfoContainer
          onClick={() =>
            mobileOpenModalBehaviour(
              setCancellationPolicyContent,
              cancellationPolicyContent
            )
          }
        >
          <InfoSubContainer>
            <InfoTitle>Termini di cancellazione</InfoTitle>
            <InfoParagraph>{cancellationInfo}</InfoParagraph>
          </InfoSubContainer>
          <LinkContainer>
            {widthWindow >= 768 && (
              <InfoLink reindexLDisplay href={cancellationLink} target="_blank">
                Per saperne di piu
              </InfoLink>
            )}
            <i
              className={`${
                widthWindow >= 768 ? "small " : ""
              }chevron right icon`}
            />
          </LinkContainer>
        </InfoContainer>

        <InfoContainer
          onClick={() =>
            mobileOpenModalBehaviour(
              setGuestsRequisiteContent,
              guestsRequisiteContent
            )
          }
        >
          <InfoSubContainer>
            <InfoTitle>Requisiti degli ospiti</InfoTitle>
            <InfoParagraph>
              Possono partecipare fino a 6 ospiti di almeno 4 anni. Inoltre, i
              genitori possono portare figli di età inferiore a 2 anni.
            </InfoParagraph>
          </InfoSubContainer>
          <LinkContainer
            onClick={() =>
              toggleModal(setGuestsRequisiteContent, guestsRequisiteContent)
            }
          >
            {widthWindow >= 768 && <InfoLink href="">Mostra altro</InfoLink>}
            <i
              className={`${
                widthWindow >= 768 ? "small " : ""
              }chevron right icon`}
            />
          </LinkContainer>
        </InfoContainer>

        <InfoContainer
          onClick={() =>
            mobileOpenModalBehaviour(setWhatToTakeContent, whatToTakeContent)
          }
        >
          <InfoSubContainer>
            <InfoTitle>Cosa portare</InfoTitle>
            {widthWindow >= 768 && (
              <>
                <InfoParagraph>Camera</InfoParagraph>
                <InfoParagraph>Mancia per lo sviluppatore</InfoParagraph>
              </>
            )}
          </InfoSubContainer>
          <LinkContainer>
            {widthWindow < 768 && <i className="chevron right icon" />}
          </LinkContainer>
        </InfoContainer>

        {widthWindow < 768 && (
          <InfoContainer>
            <InfoSubContainer>
              <i className="font awesome flag icon" />
              <InfoLink mobileLink href="https://www.airbnb.it/experiences">
                Segnala questa esperienza
              </InfoLink>
            </InfoSubContainer>
          </InfoContainer>
        )}
      </InfoWrapper>

      <UpSlideModal
        modalOpen={isModalOpen}
        toggleModal={toggleModal}
        widthWindow={widthWindow}
        buttonDirectives={modalCloseDirectives}
      >
        {cancellationPolicyContent && (
          <CancellationPolicy
            link={cancellationLink}
            content={cancellationInfo}
          />
        )}

        {guestsRequisiteContent && <GuestRequisite />}

        {whatToTakeContent && <WhatToBring />}
      </UpSlideModal>
    </InfoSection>
  );
}
