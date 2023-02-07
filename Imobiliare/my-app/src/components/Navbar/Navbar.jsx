import React, { useState } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import AddForm from '../AddReal/AddForm';
import { ModalComponent } from '../Modals';

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <Flex flexDirection="column" gap={10} align="center" mt={20}>
          {/* {isVisible && (
            <Text isVisible={isVisible} setIsVisible={() => setIsVisible(!isVisible)}>
              Nothing here!
            </Text>
          )} */}

          <Button
            mt={10}
            colorScheme="blue"
            onClick={() => {
              setIsOpen(!isOpen);
              setIsVisible(!isVisible);
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
