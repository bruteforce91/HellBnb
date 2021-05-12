import styled from "styled-components";
import { Link } from "react-router-dom";
// import device from "../../assets/breakpoints";
import colors from "../../assets/colors";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  height: fit-content;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
`;

export const HeaderCarousel = styled.div`
  margin-bottom: 10px;
  max-height: 30px;
`;

export const NavigatorCarousel = styled.div`
  display: flex;
  z-index: 5;
  position: relative;
  top: 100px;
  justify-content: space-between;
  margin: 0px -17px 0px -17px;
`;

export const NavBtn = styled.button`
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${colors.borderColor} solid 1px;
  border-radius: 50%;
  background-color: white;
  color: black;
  width: 30px;
  height: 30px;
  font-size: 1.5rem;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  padding-left: ${(props) => (props.left ? "3px" : "5.5px")};
  padding-bottom: 5px;
  cursor: pointer;

  :focus {
    outline: none;
  }

  :hover {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  }
`;

export const CarouselTitle = styled.h3`
  color: black;
  margin-bottom: 0px;
  padding-top: 5px;
`;

export const WrapperCarousel = styled.div`
  display: flex;
  height: fit-content;
  max-width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  overflow-y: hidden;
  margin-bottom: 60px;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;
