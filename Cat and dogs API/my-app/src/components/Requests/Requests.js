import React from 'react';
import { Text } from '@chakra-ui/react';

export default function Requests(props) {
  return (
    <>
      <Text>{props.animalType}</Text>
      <Text>{props.limitOfImg}</Text>
    </>
  );
}
