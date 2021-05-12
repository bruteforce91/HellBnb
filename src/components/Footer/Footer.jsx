import React from "react";
import Layout from "../Layout/Layout";

import {
  FooterContainer,
  FooterSection,
  FooterSectionSubHeading,
  LinksWrapper,
  FooterLink,
  FooterLinkUrl,
  CompanyDetails,
  FooterBottomSection,
  TopFooterSections,
  IconContainer,
  DetailsContainer,
  DotSpan,
} from "./Footer.elements";
import footerData from "./footerData";

const footerSections = footerData.sections;
const { companyDetails } = footerData;
const disclosureLinks = companyDetails.disclosure;
const currentYear = new Date().getFullYear();

// test
export default function Footer() {
  return (
    <FooterContainer>
      <Layout noPadding="noPadding" color="color">
        <TopFooterSections>
          {footerSections.map((section, index) => {
            const { sectionName, listItems } = section;
            const sectionKey = `${sectionName}_${index}`;
            return (
              <FooterSection key={sectionKey}>
                <FooterSectionSubHeading>{sectionName}</FooterSectionSubHeading>
                <LinksWrapper>
                  {listItems.map((item, i) => {
                    const itemsKey = `${sectionKey}_${i}`;
                    const { title, link } = item;
                    return (
                      <FooterLink key={itemsKey}>
                        <FooterLinkUrl href={link}>{title}</FooterLinkUrl>
                      </FooterLink>
                    );
                  })}
                </LinksWrapper>
              </FooterSection>
            );
          })}
        </TopFooterSections>

        <FooterBottomSection>
          <IconContainer>
            <i className="facebook f icon" />
            <i className="twitter icon" />
            <i className="instagram icon" />
          </IconContainer>
          <DetailsContainer>
            <CompanyDetails>
              © {currentYear} {companyDetails.companyName}
            </CompanyDetails>
            <CompanyDetails>
              {disclosureLinks.map((element, i) => {
                const disclosureLinkKey = `${element}_${i}`;
                const { title, link } = element;
                if (i + 1 < disclosureLinks.length) {
                  return (
                    <span key={disclosureLinkKey}>
                      <FooterLinkUrl href={link}>{`${title}`}</FooterLinkUrl>
                      <DotSpan>·</DotSpan>
                    </span>
                  );
                }
                return (
                  <span key={disclosureLinkKey}>
                    <FooterLinkUrl key={disclosureLinkKey} href={link}>
                      {`${title}`}
                    </FooterLinkUrl>
                  </span>
                );
              })}
            </CompanyDetails>
          </DetailsContainer>
        </FooterBottomSection>
      </Layout>
    </FooterContainer>
  );
}
