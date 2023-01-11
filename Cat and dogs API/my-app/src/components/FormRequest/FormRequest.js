import { Flex, Input, Select, Button, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import React, { useState } from 'react';

const initialValues = {
  animalType: '',
  limiOfImg: '',
};

export default function FormRequest() {
  const [values, setValues] = useState(initialValues);

  const handlerSelectedOption = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <Flex justifyContent="center" dir="row" mt={20} gap={5}>
        <Select placeholder="Select option" w={300}>
          <option value="cat" onChange={handlerSelectedOption}>
            Cats
          </option>
          <option value="dog" onChange={handlerSelectedOption}>
            Dogs
          </option>
        </Select>

        <InputGroup w="max-content">
          <InputLeftAddon color="gray">nr</InputLeftAddon>
          <Input type="number" w={20} onChange={handlerSelectedOption} value={values.limiOfImg} />
        </InputGroup>

        <Button colorScheme="green" onClick={handlerSelectedOption} type="submnit">
          Search
        </Button>
      </Flex>
    </>
  );
}
