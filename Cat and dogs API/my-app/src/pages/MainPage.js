import { VStack, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FormRequest, ResultsImages } from '../components';

const animalMapper = {
  dog: {
    type: 'dog',
    apiKey: 'live_lhRwzphGoTUxefer3kuCPON2Q4vxu3o5C9udYNS7gv1VcJ6pUNItmJPPq4JybyxW',
  },
  cat: {
    type: 'cat',
    apiKey: 'live_TzbzEVjISE4WznpqRvWLKzhit0KqruGWLCh9dLNi1RUsC3t5oyqhzWft2qCsFLCV',
  },
};

export default function MainPage(props) {
  const [images, setImages] = useState([]);
  const [selectedOption, setSelectedOption] = useState({ animalType: '', limiOfImg: '' });

  function handlerOptions(value) {
    setSelectedOption(value);
  }

  useEffect(() => {
    console.log(selectedOption);
    if (selectedOption.animalType !== '' && animalMapper[selectedOption.animalType] !== undefined) {
      fetch(
        'https://api.the' +
          animalMapper[selectedOption.animalType].type +
          'api.com/v1/images/search?limit=' +
          selectedOption.limiOfImg +
          '&api_key=' +
          animalMapper[selectedOption.animalType].apiKey,
        {
          method: 'GET',
          headers: {
            // 'x-api-key': 'live_TzbzEVjISE4WznpqRvWLKzhit0KqruGWLCh9dLNi1RUsC3t5oyqhzWft2qCsFLCV',
            'Content-type': 'application/json',
          },
        }
      )
        .then(result => {
          return result.json();
        })
        .then(data => {
          setImages(data);
        });
    }
  }, [selectedOption]);

  return (
    <>
      <Heading mt={10} align="center">
        Cats or Dogs?
      </Heading>

      <VStack spacing={10}>
        <FormRequest handlerOptions={handlerOptions} />
        <ResultsImages images={images} />
      </VStack>
    </>
  );
}
