import React from "react";
import "./ModalContainer.css";
import { Modal } from "@mui/material";

const ModalContainer = (props) => {

  const { isOpenModal, closeModal, children } = props;
  return (
    <Modal
      className="modal-container"
      open={isOpenModal}
      onClose={closeModal}
      closeAfterTransition
    >
      <div>{children}</div>
    </Modal>
  );
};

export default ModalContainer;
