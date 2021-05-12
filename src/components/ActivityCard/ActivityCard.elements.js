import styled from "styled-components";
import colors from "../../assets/colors";
import device from "../../assets/breakpoints";

export const CardWrapper = styled.div`
  display: flex;
  margin-right: 1.1vh;
  flex-direction: column;
  /* border: black solid 1px; */
  border-radius: 10px;
  background-color: white;
  min-width: 153px;
  max-width: 153px;
  min-height: 360px;

  @media ${device.deviceM} {
    min-width: 222px;
    max-width: 222px;
    height: 410px;
  }
  @media ${device.deviceL} {
    min-width: 263px;
    max-width: 263px;
    height: 410px;
  }
  @media ${device.deviceXL} {
    min-width: 194px;
    max-width: 194px;
    height: 410px;
  }
`;

export const Img = styled.div`
  width: 100%;
  height: 204px;
  border-radius: 5%;
  margin: 0px;
  background-image: url(${(props) => props.img});
  background-size: cover;

  @media ${device.deviceM} {
    width: 100%;
    height: 295px;
  }
  @media ${device.deviceL} {
    height: 320px;
  }
  @media ${device.deviceXL} {
    height: 260px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  font-family: Helvetica;
  width: 100%;
`;

export const Title = styled.p`
  font-size: 0.9em;
  margin: 3px 0px 0px 0px;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Detail = styled.p`
  font-size: 1rem;
  margin: 3px 0px 7px 0px;
  line-height: 0.9em;
`;
export const Bold = styled.span`
  color: ${colors.darkText};
  margin: 0px;
  font-weight: bold;
  display: inline;
`;

export const Country = styled.span`
  font-size: 1em;
  margin: 4px 0px 0px 2px;
  color: ${colors.lightText};
`;

export const RankCountryWrapper = styled.div`
  display: flex;
`;

export const Dot = styled.span`
  font-size: 1em;
  margin: 4px 0px 0px 2px;
  color: ${colors.lightText};
  padding: 0px 6px 0px 6px;
`;
