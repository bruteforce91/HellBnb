import styled from "styled-components";
import colors from "../../assets/colors";

export const RateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${(props) => (props.margin ? "2px 0px 0px 2px" : "1px 0px 0px 0px")};
`;
export const Rate = styled.p`
  font-size: 1em;
  margin: ${(props) => (props.margin ? "2px 0px 0px 2px" : "1px 0px 0px 0px")};
  color: ${(props) => (props.light ? colors.lightText : "black")};
`;
