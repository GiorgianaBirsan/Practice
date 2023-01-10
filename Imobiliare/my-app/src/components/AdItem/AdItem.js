import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Heading, Stack, Text } from '@chakra-ui/react';

export default function AdItem(props) {
  console.log('propss:', props, typeof props);

  return (
    <>
      <Card variant="outline" m="15" >
        <CardHeader>
          <Heading>{props.title}</Heading>
          <Text color="gray">{props.address}</Text>
        </CardHeader>
        <CardBody>
          <Stack>
            <Text>{props.room}</Text>
            <Text>{props.description}</Text>
            <Text>Phone: {props.phone}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Text fontWeight="bold" fontSize="25px">
            ${props.price}
          </Text>
        </CardFooter>
      </Card>
    </>
  );
}
