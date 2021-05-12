import React, { useState, useEffect } from "react";
import { isoDuration, it } from "@musement/iso-duration";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments/Comments";
// import commentsData from "../components/Comments/commentsData";
import {
  fetchActivityByUuid,
  fetchRelatedActivity,
  fetchActivityMedia,
} from "../services/api";
import Map from "../components/Map/Map";
import Layout from "../components/Layout/Layout";
import ActivityTitle from "../components/ActivityTitle/ActivityTitle";
import PhotoPreview from "../components/PhotoPreview/PhotoPreview";
import Rank from "../components/Rank/Rank";
import {
  WrapPreviewPhoto,
  WrapMainDetails,
  WrapGenericInfo,
  WrapGeneric,
  WrapParagraph,
  WrapIcons,
} from "../components/Layout/Layout.element";
import CarouselActivities from "../components/CarouselActivities/CarouselActivities";
import Modal from "../components/Modal/Modal";
import Hero from "../components/Hero/Hero";
import Breadcrump from "../components/Breadcrump/Breadcrump";
import ParagraphSection from "../components/ParagraphSection/ParagraphSection";
import IconsSection from "../components/IconsSection/IconsSection";
import ThingsToKnow from "../components/ThingsToKnow/ThingsToKnow";
import DurationActivity from "../components/DurationActivity/DurationActivity";

import Languages from "../components/Languages/Languages";
import ProposedExperience from "../components/ProposedExperience/ProposedExperience";

isoDuration.setLocales(
  {
    it,
  },
  {
    fallbackLocale: "en",
  }
);

export default function Activity() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState();
  const [relatedActivity, setRelatedActivity] = useState();
  const [activitiesMedia, setActivitiesMedia] = useState();
  const { activityUuid } = useParams();
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);

  function addRecentActivity(keyActivity) {
    const getLocalStorageActivity = JSON.parse(
      localStorage.getItem("recentActivities")
    );
    if (
      getLocalStorageActivity &&
      !getLocalStorageActivity.includes(keyActivity)
    ) {
      getLocalStorageActivity.push(keyActivity);
      localStorage.setItem(
        "recentActivities",
        JSON.stringify(getLocalStorageActivity)
      );
    }
  }

  useEffect(() => {
    const handleResize = () => setWidthWindow(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const toggleModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchActivity = async () => {
      try {
        const [activity, relatedActivities, activityMedia] = await Promise.all([
          fetchActivityByUuid(activityUuid),
          fetchRelatedActivity(activityUuid),
          fetchActivityMedia(activityUuid),
        ]);
        setSelectedActivity(activity);
        setRelatedActivity(relatedActivities);
        setActivitiesMedia(activityMedia);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        throw new Error("Something went wrong during Fetch calls");
      }
    };
    addRecentActivity(activityUuid);
    fetchActivity();
  }, [activityUuid]);

  return (
    <>
      {/* Content to define */}
      {isLoading ? (
        <h1 style={{ marginTop: "200px" }}>Loading...</h1>
      ) : (
        <>
          {widthWindow < 744 && (
            <>
              <Hero coverUrl={selectedActivity.cover_image_url} />
            </>
          )}
          <Layout>
            {selectedActivity ? (
              <>
                <WrapParagraph>
                  <Breadcrump activityInfo={selectedActivity} />
                  <ActivityTitle
                    title={selectedActivity.title}
                    rate={48}
                    number={9}
                    country={selectedActivity.city.country.name}
                  />
                </WrapParagraph>
                {widthWindow > 744 && (
                  <>
                    <WrapPreviewPhoto>
                      <PhotoPreview
                        toggleModal={toggleModal}
                        activitiesMedia={activitiesMedia}
                        cover={selectedActivity.cover_image_url}
                        image={selectedActivity.city.cover_image_url}
                      />
                    </WrapPreviewPhoto>
                  </>
                )}

                <WrapMainDetails>
                  <WrapGenericInfo>
                    <ProposedExperience selectedActivity={selectedActivity}>
                      <DurationActivity
                        duration={selectedActivity.duration_range.max}
                        isoDuration={isoDuration}
                      />
                      <Languages lang={selectedActivity.languages} />
                    </ProposedExperience>

                    <WrapIcons>
                      <IconsSection
                        mobile={selectedActivity.voucher_access_usage}
                        features={selectedActivity.features}
                        opsDays={selectedActivity.operational_days}
                      />
                    </WrapIcons>

                    <ParagraphSection
                      title="Cosa farete"
                      paragraphText={selectedActivity.about}
                      maxCharacters={2000}
                    />
                    {widthWindow < 744 && (
                      <>
                        <WrapPreviewPhoto>
                          <PhotoPreview
                            toggleModal={toggleModal}
                            activitiesMedia={activitiesMedia}
                            cover={selectedActivity.cover_image_url}
                            image={selectedActivity.city.cover_image_url}
                          />
                        </WrapPreviewPhoto>
                      </>
                    )}
                  </WrapGenericInfo>
                  {/* <WrapModalInfo /> */}
                </WrapMainDetails>
                <WrapGeneric>
                  <Map activityData={selectedActivity} />
                </WrapGeneric>
                {/* <WrapExperiences /> */}
                <Rank rate={48} number={9} />
                <WrapGeneric comments>
                  <Comments pageId={activityUuid} />
                </WrapGeneric>
                {/* <WrapGeneric available /> */}
                <WrapGeneric info />

                <WrapGeneric available />
                <WrapGeneric>
                  <ThingsToKnow activityUuid={activityUuid} />
                </WrapGeneric>
                <WrapGeneric>
                  <CarouselActivities activities={relatedActivity} />
                </WrapGeneric>

                <Modal
                  slides={activitiesMedia}
                  ModalIsOpen={ModalIsOpen}
                  toggleModal={toggleModal}
                />
              </>
            ) : (
              "Impossibile trovare l'evento selezionato."
            )}
          </Layout>
        </>
      )}
    </>
  );
}
