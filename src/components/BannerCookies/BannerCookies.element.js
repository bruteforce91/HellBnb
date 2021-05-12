import styled, { css } from "styled-components";
import colors from "../../assets/colors";
import device from "../../assets/breakpoints";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const WrapContentCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1080px) {
    flex-direction: row;
  }
`;
export const Banner = styled.div`
  min-height: 100px;
  background-color: #ffffff;
  width: 92%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  position: fixed;
  bottom: 30px;
  padding: 5%;
  box-shadow: 0px 0px 10px 2px ${colors.borderColor};
  border-radius: 10px;
  z-index: 1000;
  @media ${device.deviceL} {
    padding: 2%;
  }
`;

export const Icon = styled.i`
  color: rgb(66, 139, 255);
`;

export const TitleCookie = styled.strong`
  font-size: 18px;
  color: ${colors.darkText};
  margin-bottom: 14px;
  @media ${device.deviceL} {
    margin-bottom: 14px;
  }
`;

export const ParagraphCookie = styled.p`
  font-size: 16px;
  color: ${colors.lightText};
  letter-spacing: 0.7px;
  margin-bottom: 12px;
`;

export const LinkPolicy = styled.a`
  color: black;
  font-weight: bold;
  :visited {
    color: black;
  }
`;

export const BtnCookies = styled.button`
  font-size: 16px;
  width: 90%;
  border-radius: 8px;
  padding: 10px 0;
  cursor: pointer;
  margin: 5px 0;
  font-weight: 600;
  border: 1.3px solid ${colors.darkText};
  :hover {
    transition: box-shadow 0.2s ease 0s, transform 0.1s ease 0s;
  }
  :focus {
    outline: none;
  }
  ${(props) =>
    props.accept &&
    css`
      background-color: rgb(34, 34, 34);
      color: white;
      :hover {
        background-color: black;
      }
    `}
  ${(props) =>
    props.preference &&
    css`
      background-color: white;
      color: rgb(34, 34, 34);
      border-color: rgb(34, 34, 34);
      :hover {
        background-color: rgb(247, 247, 247);
        color: black;
      }
    `}
    @media (min-width: 1080px) {
    width: 20%;
    margin-right: 10px;
    ${(props) =>
      props.accept &&
      css`
        width: 10%;
      `}
  }
`;
