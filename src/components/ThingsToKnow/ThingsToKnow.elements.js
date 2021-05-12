import styled, { css } from "styled-components";
import colors from "../../assets/colors";
import device from "../../assets/breakpoints";

export const InfoSection = styled.section`
  border-bottom: 1px solid ${colors.borderColor};

  @media ${device.deviceM} {
    border-top: 1px solid ${colors.borderColor};
    padding: 48px 0 16px 0;
  }

  @media ${device.deviceL} {
    padding: 48px 0;
  }
`;

export const SectionTitle = styled.h3`
  font-family: "Helvetica";
  font-size: ${(props) => (props.modalType ? "24px" : "20px")};
  color: ${colors.darkText};
  margin-bottom: ${(props) => (props.modalType ? "40px" : "0")};
`;

export const InfoWrapper = styled.div`
  @media ${device.deviceL} {
    display: flex;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  border-top: 1px solid ${colors.borderColor};
  align-items: center;
  cursor: pointer;

  @media ${device.deviceM} {
    flex-direction: column;
    align-items: flex-start;
    border-top: unset;
    padding: 0;
    padding-top: 24px;
    cursor: unset;
  }

  @media ${device.deviceL} {
    width: 33.3%;
    padding-right: 20px;
  }
`;

export const InfoSubContainer = styled.div`
  text-justify: center;
`;

export const InfoTitle = styled.h4`
  font-family: "Helvetica";
  font-size: 20px;
  color: ${colors.darkText};
  margin-bottom: 0;

  @media ${device.deviceM} {
    font-size: 16px;
  }
`;

export const InfoParagraph = styled.p`
  margin: ${(props) => (props.listType ? "0 0 0 8px" : "8px 0 0 0")};
  ${(props) =>
    props.modalType
      ? css`
          color: ${colors.darkText};
          font-size: 16px;
          margin: 0 0 16px 0;
        `
      : css`
          color: ${colors.lightText};
        `};

  @media ${device.deviceM} {
    margin-top: 14px;
    font-size: 16px;
  }
`;

export const LinkContainer = styled.div`
  @media ${device.deviceM} {
    margin-top: 18px;
    font-size: 16px;
    cursor: pointer;
  }
`;

export const InfoLink = styled.a`
  text-decoration: underline;
  font-weight: bold;
  color: ${colors.darkText};
  :visited {
    color: ${colors.lightText};
  }
  :active,
  :hover {
    color: ${colors.darkText};
  }

  ${(props) =>
    props.mobileLink
      ? css`
          font-size: 16px;
          :visited {
            color: ${colors.darkText};
          }
        `
      : css`
          font-size: 14px;
        `};

  @media ${device.deviceM} {
    pointer-events: ${(props) => props.reindexLDisplay && "unset"};
  }

  @media ${device.deviceM} {
    pointer-events: ${(props) => (props.reindexLDisplay ? "unset" : "none")};
  }
`;

export const ModalListItem = styled.li`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 22px;
`;
