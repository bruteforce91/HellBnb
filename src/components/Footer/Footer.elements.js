import styled from "styled-components";
import device from "../../assets/breakpoints";
import colors from "../../assets/colors";

const footerFont = "Helvetica";

export const FooterContainer = styled.main`
  width: 100vw;
  padding: 0 24px;
  background-color: ${colors.footer};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-top: 1px solid ${colors.borderColor};
  border-bottom: 1px solid ${colors.borderColor};

  @media ${device.deviceM} {
    padding: 0 40px;
  }
  @media ${device.deviceXL} {
    padding: 0 80px;
    align-items: center;
  }
`;

export const TopFooterSections = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1624px;

  @media ${device.deviceXL} {
    flex-direction: row;
    border-bottom: 1px solid ${colors.borderColor};
  }
`;
export const FooterBottomSection = styled.div`
  width: 100%;
  padding: 12px 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: left;

  @media ${device.deviceM} {
    align-items: center;
    min-width: 100%;
  }
  @media ${device.deviceXL} {
    padding: 18px 0 26px 0;
    flex-direction: row-reverse;
    justify-content: space-between;
    min-width: unset;
    max-width: 1624px;
  }
`;

export const FooterSection = styled.section`
  width: 100%;
  padding: 32px 0;
  border-bottom: 1px solid ${colors.borderColor};
  padding: 32px 0;

  @media ${device.deviceM} {
    padding: 40px 0;
  }

  @media ${device.deviceXL} {
    padding: 48px 0;
    border-bottom: none;
    height: 100%;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media ${device.deviceXL} {
    flex-grow: unset;
    flex-direction: row;
  }
`;

export const FooterSectionSubHeading = styled.h4`
  font-size: 12px;
  text-transform: uppercase;
  text-align: left;
  font-family: ${footerFont};
  color: ${colors.darkText};
  margin: 0;
`;

export const LinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  @media ${device.deviceM} {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media ${device.deviceXL} {
    flex-direction: column;
    flex-wrap: no-wrap;
  }
`;
export const FooterLink = styled.li`
  width: 100%;
  font-size: 14px;
  font-family: ${footerFont};
  list-style: none;
  margin-top: 12px;
  @media ${device.deviceM} {
    width: 33%;
    padding-right: 10px;
    margin-top: 16px;
  }
  @media ${device.deviceXL} {
    width: 100%;
  }
`;
export const FooterLinkUrl = styled.a`
  cursor: pointer;
  text-decoration: none;
  text-decoration: inherit;
  color: ${colors.darkText};
  :visited,
  :active,
  :hover {
    text-decoration: inherit;
    color: ${colors.darkText};
  }
  :hover {
    text-decoration: underline;
  }
`;
export const CompanyDetails = styled.div`
  width: 100%;
  font-size: 14px;
  font-family: ${footerFont};
  list-style: none;
  color: ${colors.darkText};
  margin-top: 12px;
  text-align: left;
  @media ${device.deviceM} {
    text-align: center;
  }
  @media ${device.deviceXL} {
    margin-top: 0;
    width: unset;
    margin-right: 20px;
  }
`;
export const IconContainer = styled.div`
  display: none;
  justify-content: center;
  width: 100%;
  font-size: 18px;

  @media ${device.deviceM} {
    display: flex;
  }
  @media ${device.deviceXL} {
    width: unset;
  }
`;

export const DotSpan = styled.span`
  font-size: 14px;
  font-weight: 700;
  margin: 0 10px;
`;
