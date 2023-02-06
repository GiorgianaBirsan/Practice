import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
} from '@chakra-ui/react';
import React from 'react';

export default function ModalComponent(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={() => props.setIsOpen(!props.isOpen)}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader align="center" p={10}>
          {props.title}
        </ModalHeader>
        <ModalBody>
          {props.children}
            </ModalBody>
      </ModalContent>
    </Modal>
  );
}
