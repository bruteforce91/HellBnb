import React, { useState, useEffect } from "react";
import { Title, SubTitle } from "./Home.elements";
import {
  fetchActivities,
  fetchCities,
  fetchActivityByUuid,
} from "../../services/api";
import CarouselActivities from "../../components/CarouselActivities/CarouselActivities";
import CarouselCities from "../../components/CarouselCities/CarouselCities";
import Layout from "../../components/Layout/Layout";
import { WrapGeneric } from "../../components/Layout/Layout.element";

function Home() {
  const [activities, setActivities] = useState([]);
  const [cities, setCities] = useState([]);
  const [recentActivities, setRecentActivities] = useState(
    JSON.parse(localStorage.getItem("recentActivities"))
  );
  const [filterActivities, setFilterActivities] = useState(undefined);

  /* recentActivities logic  */
  useEffect(() => {
    const recentlyActivities = () => {
      if (!recentActivities) {
        localStorage.setItem("recentActivities", JSON.stringify([]));
      }
    };
    recentlyActivities();
  }, [recentActivities]);

  /* end logic recent activities */
  useEffect(() => {
    const fetch = async () => {
      try {
        if (recentActivities) {
          const allRecentActivities = await Promise.all(
            recentActivities.map((recent) => fetchActivityByUuid(recent))
          );
          setFilterActivities(allRecentActivities);
        }
        const [dataActivities, dataCities] = await Promise.all([
          fetchActivities(),
          fetchCities(),
        ]);
        setActivities(dataActivities);
        setCities(dataCities);
      } catch (error) {
        // eslint-disable-next-line
        console.error(error);
      }
    };
    fetch();
  }, []);
  return (
    <Layout>
      <Title>ESPERIENZE HELLBNB</Title>
      <SubTitle>Attività uniche organizzate da esperti</SubTitle>
      <WrapGeneric>
        {activities && (
          <CarouselActivities
            activities={activities}
            setRecentActivities={setRecentActivities}
            title="Esperienze simili"
          />
        )}
        {cities && <CarouselCities cities={cities} />}
        {filterActivities && (
          <CarouselActivities
            activities={filterActivities}
            title="Attività Recenti"
          />
        )}
      </WrapGeneric>
    </Layout>
  );
}
export default Home;
