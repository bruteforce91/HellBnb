import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalWrapper,
  ModalHead,
  ModalHeadBtnDiv,
  ModalHeadBtn,
  ModalRank,
} from "./CommentsModal.elements";
import {
  DataContainer,
  GuestImage,
  GuestData,
  GuestName,
  GuestRevDate,
  GuestComment,
  GuestReview,
  ReviewContainer,
} from "./CommentsGuests.elements";

function CommentsModal({ modalComments, isOpen, setIsOpen }) {
  function enableScroll() {
    setIsOpen(false);
    document.body.style.overflow = "scroll";
  }
  return (
    <div>
      {isOpen ? (
        <>
          <Modal modalIsOpen={isOpen}>
            <ModalOverlay overlay />
            <ReviewContainer modalScroll>
              <ModalBody>
                <ModalHead>
                  <ModalHeadBtnDiv>
                    <ModalHeadBtn type="button" onClick={() => enableScroll()}>
                      {" "}
                      <i className="chevron left icon" />{" "}
                    </ModalHeadBtn>
                  </ModalHeadBtnDiv>
                </ModalHead>
                <ModalWrapper>
                  <ModalRank>Rank</ModalRank>
                  {modalComments.map((guest, i) => {
                    const guestId = `${guest}_${i}`;
                    return (
                      <>
                        <GuestReview noBorder modal>
                          <div key={guestId}>
                            <DataContainer>
                              <GuestImage
                                img
                                src={guest.image}
                                alt="author_avatar"
                              />

                              <GuestData>
                                <GuestName>{guest.name}</GuestName>
                                <GuestRevDate>{guest.date}</GuestRevDate>
                              </GuestData>
                            </DataContainer>
                          </div>
                          <GuestComment modalComment>{guest.body}</GuestComment>
                        </GuestReview>
                      </>
                    );
                  })}
                </ModalWrapper>
              </ModalBody>
            </ReviewContainer>
          </Modal>
        </>
      ) : (
        <> </>
      )}
    </div>
  );
}

export default CommentsModal;
