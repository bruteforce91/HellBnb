import styled from "styled-components";
import colors from "../../assets/colors";
import device from "../../assets/breakpoints";

export const IconsSectionWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;
  @media ${device.deviceL} {
    padding-bottom: 15px;
  }
`;

export const TextContainer = styled.div`
  font-family: "Helvetica";
  padding-left: 10px;
  padding-bottom: 4px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin: 0;
  font-family: "Helvetica";
  font-size: 16px;
  display: flex;
  flex-direction: column;
  padding-bottom: 3px;
  color: ${colors.darkText};
`;

export const Paragraph = styled.p`
  font-family: "Helvetica";
  font-size: 14px;
  color: ${colors.lightText};
`;
