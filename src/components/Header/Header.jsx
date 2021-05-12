import React from "react";
import { useLocation } from "react-router-dom";
import {
  HeaderContainer,
  LogoHeading,
  HeaderLink,
  ImgLogo,
} from "./Header.elements";
import airbnbLogo from "../../assets/images/airbnb_logo.svg";
import Layout from "../Layout/Layout";
import { WrapHeader } from "../Layout/Layout.element";
import useWindowDimensions from "../CarouselActivities/WindowSize";

function Header() {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Layout noPadding="noPadding">
        <WrapHeader>
          <HeaderLink to="/">
            {useWindowDimensions().width > 743 || location.pathname === "/" ? (
              <ImgLogo src={airbnbLogo} alt="hellbnb logo" width="50px" />
            ) : (
              <i className="black chevron left icon" />
            )}
          </HeaderLink>
          <LogoHeading>hellbnb</LogoHeading>
        </WrapHeader>
      </Layout>
    </HeaderContainer>
  );
}

export default Header;
