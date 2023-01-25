import React from 'react';
import { Card, Flex } from '@chakra-ui/react';

export default function ResultsImages(props) {
  const { images } = props;

  return (
    <>
      <Flex wrap="wrap" dir="row" gap={5} justifyContent="center">
        {images.map((image, index) => {
          return (
            <Card maxW={200} maxH={200} key={index}>
              <img
                src={image.url}
                style={{ width: '100%', height: '100%' }}
                object-fit="cover"
                key={index}
              />
            </Card>
          );
        })}
      </Flex>
    </>
  );
}
