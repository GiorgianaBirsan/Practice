import React from 'react';
import { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ModalComponent } from '../Modals';
import AddForm from '../AddReal/AddForm';
import { DeleteAd } from '../Buttons/DeleteAd';
//import getListAds from '../../api/listAds/getListAds';

export default function AdItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card id={props.id} mt={10}>
        <CardHeader>
          <HStack justifyContent="space-between">
            <VStack align="flex-start">
              <Heading>{props.title}</Heading>
              <Text color="gray">{props.address}</Text>
            </VStack>

            <Button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Edit
            </Button>
          </HStack>
        </CardHeader>

        <CardBody>
          <Stack>
            <Text>{props.room}</Text>
            <Text fontSize="sm" color="gray">
              {props.surface} m2
            </Text>
            <Text>{props.description}</Text>
            <Text>Phone: {props.phone}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Text fontWeight="bold" fontSize="25px">
            ${props.price}
          </Text>

          <DeleteAd deletehandler={props.deletehandler}></DeleteAd>
        </CardFooter>
      </Card>

      <ModalComponent
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
        children={
          <AddForm
       
            handlerModalVisibility={setIsOpen}
            edit={props.edit}
            ad={{
              id: props.id,
              title: props.title,
              address: props.address,
              description: props.description,
              price: props.price,
              surface: props.surface,
              phone: props.phone,
              room: props.room,
            }}
          />
        }
        title="Describe your real estate"
      />
    </>
  );
}
