import React, { useState } from 'react';
import {
  Text,
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Flex,
  ModalHeader,
} from '@chakra-ui/react';
import AddForm from '../AddReal/AddForm';

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <Flex flexDirection="column">
          <Button
           mt={10}
            colorScheme="blue"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
           + Create ad
          </Button>
        </Flex>
      </Flex>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
           <ModalHeader align="center" p={10}>Create your real estate ad</ModalHeader>
          <ModalBody>
            <AddForm handlerAddAd={props.handlerSetList} handlerModalVisibility={setIsOpen} />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Navbar;
