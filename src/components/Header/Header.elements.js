import { Link } from "react-router-dom";
import styled from "styled-components";
import device from "../../assets/breakpoints";
import colors from "../../assets/colors";

const HeaderContainer = styled.header`
  position: fixed;
  right: 0;
  top: 0;
  height: 56px;
  background: #ffffff;
  width: 100%;
  margin: 0;
  z-index: 100;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);

  @media ${device.deviceM} {
    height: 72px;
  }

  @media ${device.deviceL} {
    height: 84px;
  }
`;

const HeaderLink = styled(Link)`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const LogoHeading = styled.h1`
  color: ${colors.primaryColor};
  margin: 5px 10px;
  font-size: 1.5rem;
  font-family: "Helvetica";
  display: none;

  @media ${device.deviceM} {
    display: block;
  }

  @media ${device.deviceL} {
    font-size: 2rem;
  }
`;

const ImgLogo = styled.img`
  width: 30px;
  margin: 10px 0px;

  @media ${device.deviceM} {
    width: 50px;
  }
  @media ${device.deviceL} {
    width: 50px;
  }
`;

export { LogoHeading, HeaderLink, HeaderContainer, ImgLogo };
