import styled, { css } from "styled-components";
import device from "../../assets/breakpoints";
import colors from "../../assets/colors";

export const ActivityModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  z-index: 120;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
`;

export const CounterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px;
  width: 100%;
  transition: all 0.2s ease-in-out;
`;

export const CloseBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 8px;
  cursor: pointer;
  display: ${(props) => ((props.display ? "block" : props.none) ? "none" : "")};
`;

export const CloseIcon = styled.span`
  color: white;
  min-height: 35px;
  min-width: 35px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: ${(props) => (props.mobile ? "flex" : "none")};

  :hover {
    border-radius: 50%;
    background: ${colors.darkText};
  }

  @media ${device.deviceM} {
    padding-top: 6px;
    display: ${(props) => (props.desktop ? "block" : "none")};
    width: ${(props) => (props.center ? "calc( 100% - 160px )" : "80px")};
    width: 100px;

    :hover {
      border-radius: 5px;
    }
  }
`;

export const PhotoCounterNum = styled.div`
  color: white;
  min-height: 35px;
  min-width: 35px;
  font-size: 16px;
  text-align: center;
  flex-grow: 1;
  padding-right: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.mobile ? "flex" : "none")};

  @media ${device.deviceM} {
    padding-right: 100px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  max-height: 90%;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`;

export const ModalImage = styled.img`
  min-width: 100%;
  height: 100%;
  object-fit: contain;
  scroll-snap-align: start;
`;

export const ArrowBtn = styled.button`
  color: white;
  background: black;
  height: 50px;
  width: 50px;
  border: white 2px solid;
  border-radius: 50%;
  display: none;

  :hover {
    border-radius: 50%;
    background: ${colors.darkText};
  }

  @media ${device.deviceM} {
    ${(props) =>
      props.none &&
      css`
        display: none;
      `}
    ${(props) =>
      props.left &&
      css`
        display: block;
        position: fixed;
        top: 50%;
        left: 2%;
        z-index: 30;
      `}


    ${(props) =>
      props.right &&
      css`
        display: block;
        position: fixed;
        top: 50%;
        right: 2%;
        z-index: 30;
      `}
  }
`;
