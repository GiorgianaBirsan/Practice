import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Portal,
} from "@chakra-ui/react";
import React from "react";

export default function ModalUI(props) {
  return (
    <Portal>
      <Modal
        isOpen={props.isOpen}
        onClose={() => props.setIsOpen(!props.isOpen)}
        modalID={props.modalId}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{props.children}</ModalBody>
        </ModalContent>
      </Modal>
    </Portal>
  );
}
