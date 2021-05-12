import styled from "styled-components";
import colors from "../../assets/colors";
import device from "../../assets/breakpoints";

export const BreadcrumpContainer = styled.section`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  display: none;
  padding-bottom: 32px;

  @media ${device.deviceM} {
    display: flex;
  }
`;

export const AnchorTag = styled.a`
  text-decoration: underline;
  color: ${colors.darkText};
  font-size: 14px;
  font-weight: 300;
  transition: color 0.333s ease-in;

  :visited,
  :active {
    text-decoration: underline;
    color: ${colors.darkText};
  }
  :hover {
    text-decoration: none;
    color: ${colors.lightText};
  }
`;

export const Icon = styled.span`
  color: inherit;
  margin-left: 3.5px;
`;

export const ActivityType = styled.h4`
  color: ${colors.darkText};
  margin: 0;
  font-family: "Helvetica";
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 300;
`;
