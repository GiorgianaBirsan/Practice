import { VStack, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FormRequest, ResultsImages } from '../components';

export default function MainPage() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch('https://api.the' + 'dog' + 'api.com/v1/images/search?limit=' + '20'+'&api_key=live_TzbzEVjISE4WznpqRvWLKzhit0KqruGWLCh9dLNi1RUsC3t5oyqhzWft2qCsFLCV', {
      method: 'GET',
      headers: {
        'x-api-key': 'live_TzbzEVjISE4WznpqRvWLKzhit0KqruGWLCh9dLNi1RUsC3t5oyqhzWft2qCsFLCV',
        'Content-type': 'application/json',
      },
    })
      .then(result => {
        return result.json();
      })
      .then(data => {
        setImages(data);
      });
  }, []);

  return (
    <>
      <Heading mt={10} align="center">
        Cats or Dogs?
      </Heading>

      <VStack spacing={10}>
        <FormRequest />
        <ResultsImages images={images} />
      </VStack>
    </>
  );
}
