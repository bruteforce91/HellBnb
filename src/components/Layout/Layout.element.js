import styled, { css } from "styled-components";
import device from "../../assets/breakpoints";
import colors from "../../assets/colors";

const MainWrap = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 10px 24px 0px 24px;
  background-color: ${(props) => (props.color ? `${colors.footer}` : "white")};
  justify-content: center;
  box-sizing: border-box;
  ${(props) =>
    props.noPadding &&
    css`
      max-height: 80;
      justify-content: center;
      padding-top: 0;
    `}
  @media ${device.deviceM} {
    padding: 85px 40px 0px 40px;
    ${(props) =>
      props.noPadding &&
      css`
        max-height: 80;
        justify-content: center;
        padding-top: 0;
      `}
  }
  @media ${device.deviceL} {
    padding: 85px 80px 0px 80px;
    ${(props) =>
      props.noPadding &&
      css`
        max-height: 80;
        justify-content: center;
        padding-top: 0;
      `}
  }
  @media ${device.deviceXL} {
    padding: 100px auto 0px auto;
    ${(props) =>
      props.noPadding &&
      css`
        max-height: 80;
        justify-content: center;
        padding: 0;
      `}
  }
`;

const ContentWrap = styled.div`
  display: flex;
  min-width: 100%;
  margin-top: 10px;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  position: relative;
  box-sizing: border-box;
  overflow-x: hidden;
  @media ${device.deviceXL} {
    max-width: 1128px;
    min-width: 1128px;
    ${(props) =>
      props.header &&
      css`
        max-height: 80;
        justify-content: start;
        padding-top: 0;
      `}
  }
`;

const WrapPreviewPhoto = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  min-height: 300px;
  justify-content: start;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const WrapMainDetails = styled.div`
  min-height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px 0px;
  @media ${device.deviceM} {
    padding: 0px 0px;
    position: relative;
    align-items: start;
    width: 70%;
  }
`;

const WrapGenericInfo = styled.div`
  width: 100%;

  @media ${device.deviceL} {
    width: 55%;
    margin: 20px 0px;
  }
`;

const WrapModalInfo = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: red;
  height: 10%;
  @media ${device.deviceM} {
    position: fixed;
    bottom: 10%;
    width: 350px;
    right: 20%;
    height: 30%;
    border-radius: 12px;
  }
`;

const WrapGeneric = styled.div`
  min-height: fit-content;
  width: 100%;
  margin: 20px 0;
  background-color: ${(props) =>
    (props.info && `lightpink`) || (props.available && `lightcyan`)};
`;

const WrapIcons = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const WrapParagraph = styled.div`
  min-height: 120px;
  width: 100%;
  margin: 20px 0;
`;

const WrapHeader = styled.div`
  display: flex;
  justify-content: start;
  width: 20%;
  max-height: 56px;
  align-items: center;
  @media ${device.deviceM} {
    max-height: 72px;
  }
  @media ${device.deviceL} {
    max-height: 84px;
  }
`;

export {
  MainWrap,
  ContentWrap,
  WrapPreviewPhoto,
  WrapGenericInfo,
  WrapMainDetails,
  WrapModalInfo,
  WrapGeneric,
  WrapHeader,
  WrapParagraph,
  WrapIcons,
};
