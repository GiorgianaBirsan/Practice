import React, { useState } from 'react';
import { BrowserRouter, Rout, Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Button,
  Box,
  Grid,
  VStack,
  HStack,
  useDisclosure,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
  Flex,
} from '@chakra-ui/react';
import AddForm from '../AddReal/AddForm';
import AdComponent from '../AdItem/AdItem';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <Flex flexDirection="column">
          <Text>Adauga </Text>
          <Button
            colorScheme="blue"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Add
          </Button>
        </Flex>
      </Flex>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <AddForm />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => setIsOpen(!isOpen)}>
              Save
            </Button>
            <Button variant="ghost">Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Navbar;
