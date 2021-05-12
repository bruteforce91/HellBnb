import React, { useState } from "react";
import commentsData from "./commentsData";
import CommentsModal from "./CommentsModal";
import {
  CommentsWrapper,
  ReviewContainer,
  GuestImage,
  GuestName,
  GuestData,
  GuestRevDate,
  DataContainer,
  GuestComment,
  GuestReview,
  ReviewBtnDiv,
  ReviewBtn,
} from "./CommentsGuests.elements";
import ParagraphSection from "../ParagraphSection/ParagraphSection";

function Comments({ pageId }) {
  const reviews = commentsData;
  const [isModalVisible, setIsModalVisible] = useState(false);
  function disableScroll() {
    setIsModalVisible(true);
    document.body.style.overflow = "hidden";
  }
  return (
    <div>
      {reviews
        .filter((activity) => activity.id === pageId)
        .map((activityReview, index) => {
          const activityComments = activityReview.comments;
          const topFiveComments = activityComments.slice(0, 5);

          const singleReviewKey = `${activityReview}_${index}`;
          return (
            <div key={singleReviewKey}>
              <CommentsWrapper>
                <ReviewContainer>
                  {topFiveComments.map((guest, i) => {
                    const guestId = `${guest}_${i}`;
                    return (
                      <React.Fragment key={guestId}>
                        <GuestReview>
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
                          <ParagraphSection
                            title=""
                            paragraphText={guest.body}
                            maxCharacters={100}
                          >
                            <GuestComment>{guest.body}</GuestComment>
                          </ParagraphSection>
                        </GuestReview>
                      </React.Fragment>
                    );
                  })}
                </ReviewContainer>
                {activityComments.length >= 5 && (
                  <ReviewBtnDiv>
                    {" "}
                    <ReviewBtn type="button" onClick={() => disableScroll()}>
                      Mostra tutte le {activityComments.length} recensioni
                    </ReviewBtn>
                  </ReviewBtnDiv>
                )}
                {isModalVisible && (
                  <CommentsModal
                    modalComments={activityComments}
                    isOpen={isModalVisible}
                    setIsOpen={setIsModalVisible}
                  />
                )}
              </CommentsWrapper>
            </div>
          );
        })}
    </div>
  );
}

export default Comments;
