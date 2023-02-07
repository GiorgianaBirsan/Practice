import React, { useState } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import AddForm from '../AddReal/AddForm';
import { ModalComponent } from '../Modals';

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <Flex flexDirection="row" gap={10}>
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

      <ModalComponent
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
        children={
          <AddForm handlerAddAd={props.handlerSetList} handlerModalVisibility={setIsOpen} />
        }
        title="Describe your real estate"
      />
    </>
  );
}

export default Navbar;
