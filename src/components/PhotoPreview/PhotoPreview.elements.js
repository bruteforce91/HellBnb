import styled from "styled-components";
import colors from "../../assets/colors";
import device from "../../assets/breakpoints";

export const PhotoPreviewContainer = styled.div`
  width: 100%;
  padding: 0 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.deviceM} {
    padding: 0 0px;
  }
`;

export const PhotoPreviewSubContainer = styled.div`
  min-height: 382px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${device.deviceM} {
    position: relative;
    min-height: unset;
    height: 33vw;
    max-height: 400px;
    max-width: 1128px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

export const FullHeightImage = styled.img`
  min-width: 68%;
  height: 100%;
  cursor: pointer;
  padding-right: 8px;
  object-fit: cover;

  :hover {
    opacity: 0.9;
  }

  @media ${device.deviceM} {
    padding: 0;
    padding-right: 8px;
    display: block;
    min-width: 29%;
  }

  &:last-child {
    padding: 0 0 0 8px;
  }
`;

export const ImageColumnContainer = styled.div`
  width: 34%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.deviceM} {
    min-width: 13.5%;
  }
`;

export const HalfHeightImage = styled.img`
  width: 100%;
  height: calc(50% - 4px);
  cursor: pointer;
  object-fit: cover;

  display: ${(props) =>
    (props.hidden ? "none" : props.display) ? "block" : "block"};

  :hover {
    opacity: 0.9;
  }

  @media ${device.deviceM} {
    height: calc(50% - 4px);
    display: block;
    border-radius: 0px;
  }
`;

export const IconContainer = styled.span`
  display: none;
  margin-right: 8px;

  @media ${device.deviceM} {
    display: inline-block;
  }
`;

export const OpenModalBtn = styled.button`
  margin: 24px 0;
  font-size: 1rem;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 13px 0;
  cursor: pointer;
  font-weight: 400;
  border: 1px solid ${colors.darkText};
  :hover {
    transition: box-shadow 0.2s ease 0s, transform 0.1s ease 0s;
    background-color: ${colors.footer};
  }
  :focus {
    outline: none;
  }

  @media ${device.deviceM} {
    font-size: 15px;
    margin: 0;
    width: unset;
    min-width: 180px;
    padding: 7px 16px;
    position: absolute;
    bottom: 15px;
    right: 2%;
  }
`;
