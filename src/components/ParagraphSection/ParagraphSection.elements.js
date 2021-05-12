import styled, { css } from "styled-components";
import colors from "../../assets/colors";

export const ParagraphContainer = styled.section`
  width: 100%;
`;

export const ParagraphTitle = styled.h3`
  font-family: "Helvetica";
  font-size: 20px;
  margin-bottom: 18px;
  ${(props) =>
    props.noMarginBottom &&
    css`
      margin-bottom: 0px;
    `}
`;
export const ParagraphBody = styled.p`
  font-size: 14px;
`;

export const ToggleKeepReading = styled.h4`
  margin-top: 0;
  font-family: "Helvetica";
  font-size: 14px;
  font-weight: 600;
  color: ${colors.darkText};
  text-decoration: underline;
  transition: all 0.2s ease;

  :hover {
    color: ${colors.lightText};
  }
`;
