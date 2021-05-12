import styled from "styled-components";
import device from "../../assets/breakpoints";
import colors from "../../assets/colors";

export const Wrap = styled.div`
  margin-top: 13vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0px 4vh 0px 4vh;
  @media ${device.deviceM} {
    margin-top: 10vh;
  }
  @media ${device.deviceL} {
    margin-top: 12vh;
    padding: 0px 3vh 0px 3vh;
  }
  @media ${device.deviceXL} {
    width: 92%;
    margin-left: 4%;
    margin-right: 4%;
    padding: 0px 13vh 0px 13vh;
  }
`;
export const Title = styled.h1`
  color: ${colors.darkText};
  padding-top: 10px;
  font-size: 12px;
  margin: 20px 0;
`;
export const SubTitle = styled.h2`
  color: ${colors.darkText};
  margin-top: 5px;
  font-size: 38px;
  @media ${device.deviceXL} {
    font-size: 46px;
  }
`;
