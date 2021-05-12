import React from "react";
import {
  ModalLayout,
  ModalContainer,
  ModalHeader,
  IconCont,
  ModalBody,
} from "./UpSlideModal.elements";

export default function UpSlideModal({
  children,
  modalOpen,
  toggleModal,
  widthWindow,
  buttonDirectives,
}) {
  const { contentFunc, funcState } = buttonDirectives;

  return (
    <ModalLayout modalOpen={modalOpen}>
      <ModalContainer modalOpen={modalOpen}>
        <ModalHeader>
          <IconCont onClick={() => toggleModal(contentFunc, !funcState)}>
            {widthWindow >= 768 ? (
              <i className="large close icon" />
            ) : (
              <i className="large chevron left icon" />
            )}
          </IconCont>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContainer>
    </ModalLayout>
  );
}
