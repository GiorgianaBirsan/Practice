import {
  Flex,
  Input,
  Select,
  Button,
  InputGroup,
  InputLeftAddon,
  FormControl,
} from '@chakra-ui/react';
import React, { useState } from 'react';

let animals = [
  { label: 'Cat', value: 'cat' },
  { label: 'Dog', value: 'dog' },
];

const initialValues = {
  animalType: '',
  limiOfImg: '',
};

export default function FormRequest(props) {
  const [values, setValues] = useState(initialValues);

  const handlerSelectedOption = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handlerSubmit = event => {
    event.preventDefault();
    props.handlerOptions(values);
  };

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <FormControl>
          <Flex justifyContent="center" dir="row" mt={20} gap={5}>
            <Select
              placeholder="Select animal..."
              variant="outline"
              name="animalType"
              value={values.animalType}
              onChange={handlerSelectedOption}
            >
              {animals.map(animal => {
                return <option value={animal.value}> {animal.label} </option>;
              })}
            </Select>

            <InputGroup w="max-content">
              <InputLeftAddon color="gray">nr</InputLeftAddon>
              <Input
                type="number"
                name="limiOfImg"
                w={20}
                value={values.limiOfImg}
                onChange={handlerSelectedOption}
                max={100}
              />
            </InputGroup>

            <Button colorScheme="green" type="submnit" p={5}>
              Search
            </Button>
          </Flex>
        </FormControl>
      </form>
    </>
  );
}
