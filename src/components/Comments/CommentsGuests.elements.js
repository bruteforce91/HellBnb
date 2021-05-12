import styled, { css } from "styled-components";
import device from "../../assets/breakpoints";

export const CommentsWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  flex-direction: column;
  @media ${device.deviceM} {
    overflow: unset;
  }
`;
export const ReviewContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x;
  scroll-behavior: smooth;
  height: fit-content;
  @media ${device.deviceM} {
    width: 100%;
    flex-direction: column;
    max-width: unset;
  }
  @media ${device.deviceL} {
    flex-flow: row wrap;
  }
`;
export const GuestReview = styled.div`
  border: 1px solid rgb(221, 221, 221);
  min-height: 236px;
  border-radius: 12px;
  padding: 16px;
  min-width: 85%;
  margin-right: 10px;
  ${(props) =>
    props.noBorder &&
    css`
      border: none;
      margin: 0px 0px 32px;
      width: 90%;
      height: fit-content;
    `}
  ${(props) =>
    props.modal &&
    css`
      margin: 0;
      min-width: 100%;
    `}  
  @media ${device.deviceM} {
    max-width: unset;
    border: none;
    min-height: 116px;
    margin: 0;
    ${(props) =>
      props.modal &&
      css`
        min-width: 700px;
        max-height: fit-content;
        margin-bottom: 32px;
      `}
  }
  @media ${device.deviceL} {
    min-height: 168px;
    min-width: 394px;
    max-width: 461px;
    width: 50%;
    padding: 0px calc(50% - 46%) 8px 0px;
    ${(props) =>
      props.modal &&
      css`
        min-width: 700px;
        min-height: 100px;
        margin-bottom: 32px;
        padding-bottom: 0px;
      `}
  }
`;
export const GuestData = styled.div`
  display: flex;
  flex-direction: column;
`;
export const GuestImage = styled.img`
  width: 40px;
  display: block;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  @media ${device.deviceM} {
    width: 56px;
  }
`;
export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
  height: 40px;
  align-items: center;
  @media ${device.deviceM} {
    height: 56px;
  }
`;
export const GuestName = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin-left: 12px;
`;
export const GuestRevDate = styled.span`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #717171;
  margin-left: 12px;
`;
export const GuestComment = styled.p`
  font-size: 16px;
  margin: 10px 0px;
  line-height: 24px;
  padding-bottom: 8px;
  ${(props) =>
    props.modalComment &&
    css`
      font-size: 15px;
      color: #717171;
      line-height: 1.8;
      word-break: break-word;
    `}
`;
export const ReviewBtnDiv = styled.div`
  display: flex;
  width: 100%;
  max-height: 48px;
  margin-top: 24px;
  @media ${device.deviceM} {
    margin-top: 8px;
  }
`;
export const ReviewBtn = styled.button`
  width: 100%;
  display: block;
  height: 48px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  line-height: 20px;
  border-radius: 8px;
  border: 1px solid;
  outline: none;
  padding: 13px 0px;
  border-color: #222222;
  background: #ffffff;
  color: #222222;
  margin: 0px;
  font-weight: 400;
  @media ${device.deviceM} {
    max-width: 279px;
    font-weight: 600;
  }
`;
