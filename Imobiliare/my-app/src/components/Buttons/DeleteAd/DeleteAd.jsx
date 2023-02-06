import React, { useState } from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { ModalComponent } from '../../Modals';

export default function DeleteAd(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        type="button"
        name="btn"
        onClick={() => setIsOpen(!isOpen)}
        variant="solid"
        colorScheme="red"
        alignSelf="flex-end"
        w={20}
        ml="auto"
      >
        Delete
      </Button>

      <ModalComponent
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
        children=""
        title="This ad will be deleted permanently! Are you sure? "
      >
        <HStack justifyContent="center" gap={5}>
          <Button
            colorScheme="blue"
            p={5}
            onClick={() => {
              props.deletehandler(props.id);
              setIsOpen(!isOpen);
            }}
          >
            Yes
          </Button>
          <Button variant="outline" colorScheme="gray" p={5} onClick={() => setIsOpen(!isOpen)}>
            No
          </Button>
        </HStack>
      </ModalComponent>
    </>
  );
}
