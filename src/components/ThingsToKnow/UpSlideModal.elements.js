import styled, { css } from "styled-components";
import colors from "../../assets/colors";
import device from "../../assets/breakpoints";

export const ModalLayout = styled.section`
  position: fixed;
  opacity: 0%;
  right: 0;
  top: 100%;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  transition: all 0.4s ease-in;
  ${(props) =>
    props.modalOpen &&
    css`
      top: 0;
      opacity: 100%;
    `};

  @media ${device.deviceM} {
    padding: 40px;
    align-items: center;
    justify-content: center;
    top: 0;
    visibility: hidden;
    display: flex;

    ${(props) =>
      props.modalOpen &&
      css`
        visibility: visible;
        opacity: 100%;
      `}
  }
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;

  @media ${device.deviceM} {
    border-radius: 15px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.3);
    max-width: 780px;
    max-height: 400px;
    transform: translateY(50%);
    transition: all 0.4s ease-in;

    ${(props) =>
      props.modalOpen &&
      css`
        transform: translateY(0);
      `}
  }
`;

export const ModalHeader = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const IconCont = styled.span`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 3px;

  @media ${device.deviceM} {
    padding-left: 6px;
  }

  :hover {
    background-color: ${colors.footer};
  }
`;

export const ModalBody = styled.div`
  padding: 0px 24px 24px 24px;
`;
