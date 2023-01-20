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
import { Requests } from '../Requests';

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
    //console.log("fmm", props.handlerOptions(values))
  };

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <FormControl>
          <Flex justifyContent="center" dir="row" mt={20} gap={5}>
            <Input
              type="text"
              placeholder="Cat or dog..."
              value={values.animalType}
              onChange={handlerSelectedOption}
              name="animalType"
            />

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

            <Button colorScheme="green" type="submnit">
              Search
            </Button>
          </Flex>
        </FormControl>
      </form>
    </>
  );
}
