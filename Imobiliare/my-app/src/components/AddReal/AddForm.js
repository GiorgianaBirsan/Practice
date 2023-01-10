import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  RadioGroup,
  VStack,
  Button,
  Radio,
  Grid,
  Box,
} from '@chakra-ui/react';
import React from 'react';

const AddForm = () => {

  const phonenr= "00000000";
  return (
    <>
      <Box>
        
        <FormControl>
          <FormLabel mt={5}>Title</FormLabel>
          <Input variant="outline" type="text" maxLimit={150} />

          <FormLabel mt={5}>Adress</FormLabel>
          <Input variant="outline" type="text" />

          <FormLabel mt={5}>Description</FormLabel>
          <Input variant="outline" type="text" maxLimit={500} />

          <FormLabel mt={5}>Rooms number</FormLabel>
          <RadioGroup>
            <VStack>
              <Radio value="1room">1 room </Radio>
              <Radio value="2rooms">2 rooms </Radio>
              <Radio value="3rooms">3 rooms </Radio>
            </VStack>
          </RadioGroup>

          <FormLabel mt={5}>Price</FormLabel>
          <Input variant="outline" type="number" />

          <FormLabel mt={5}>Phone number</FormLabel>
          <Input variant="outline" type="number" />

        </FormControl>
      </Box>
    </>
  );
};

export default AddForm;
