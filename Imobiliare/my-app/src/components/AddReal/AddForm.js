import { FormControl, FormLabel, Input, VStack, Button, Box } from '@chakra-ui/react';
import React, { useState } from 'react';

const initialValues = {
  title: '',
  address: '',
  description: '',
  price: '',
  phone: '',
  room: '',
};

function AddForm(props) {
  const [values, setValues] = useState(initialValues);

  const handlerInputForm = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <Box>
        <form
          onSubmit={event => {
            event.preventDefault();
            props.handlerAddAd(values);
            props.handlerModalVisibility(false);
          }}
        >
          <FormControl>
            <FormLabel mt={5} fontSize="xs">
              Title
            </FormLabel>
            <Input
              value={values.title}
              variant="outline"
              type="text"
              max={150}
              onChange={handlerInputForm}
              name="title"
              isRequired={true}
            />

            <FormLabel mt={5} fontSize="xs">
              Adress
            </FormLabel>
            <Input
              value={values.address}
              variant="outline"
              type="text"
              onChange={handlerInputForm}
              name="address"
              isRequired={true}
            />

            <FormLabel mt={5} fontSize="xs">
              Description
            </FormLabel>
            <Input
              value={values.description}
              variant="outline"
              type="text"
              maxLength={5}
              onChange={handlerInputForm}
              name="description"
              isRequired={true}
            />

            <FormLabel mt={5} fontSize="xs">
              Rooms number
            </FormLabel>
            <VStack align="flex-start">
              <label>
                <input
                  type="radio"
                  id="1room"
                  value="1 room"
                  name="room"
                  // checked={name === '1room'}
                  onChange={handlerInputForm}
                />
                1 room
              </label>

              <label>
                <input
                  type="radio"
                  id="2rooms"
                  value="2 rooms"
                  name="room"
                  //checked={rooms === '2room'}
                  onChange={handlerInputForm}
                />
                2 rooms
              </label>

              <label>
                <input
                  type="radio"
                  id="3 rooms"
                  value="3 rooms"
                  name="room"
                  //checked={rooms === '3room'}
                  onChange={handlerInputForm}
                />
                3 rooms
              </label>
            </VStack>

            <FormLabel mt={5} fontSize="xs">
              Price
            </FormLabel>
            <Input
              value={values.price}
              variant="outline"
              type="number"
              onChange={handlerInputForm}
              name="price"
              isRequired={true}
            />

            <FormLabel mt={5} fontSize="xs">
              Phone number
            </FormLabel>
            <Input
              value={values.phone}
              variant="outline"
              type="number"
              onChange={handlerInputForm}
              name="phone"
            />
          </FormControl>
          <Button colorScheme="blue" type="submit" mt={3}>
            Save
          </Button>
        </form>
      </Box>
    </>
  );
}

export default AddForm;
