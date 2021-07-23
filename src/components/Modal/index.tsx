import React, { FunctionComponent, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalDialog: FunctionComponent<{
  header: string;
  content: string;
  footer: string;
  isOpen: boolean;
  onCloseHandler: Function;
}> = ({ header, content, footer, isOpen = false, onCloseHandler }) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>{header}</ModalHeader>
      <ModalBody>{content}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onCloseHandler}>
          {footer}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalDialog;
