import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  HStack,
  Select,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const initialValues = {
  id: '',
  title: '',
  address: '',
  description: '',
  price: '',
  surface: '',
  phone: '',
  room: '',
  file: 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg',
};

let nrOfRooms = [
  { label: '1 room', value: '1 room' },
  { label: '2 rooms', value: '2 rooms' },
  { label: '3 rooms', value: '3 rooms' },
  { label: '4 rooms', value: '4 rooms' },
  { label: '5+ rooms', value: '5+ rooms' },
];

function AddForm(props) {
  const [values, setValues] = useState(props.ad ? props.ad : initialValues);
  const [file, setFile] = useState(initialValues.file);

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  if (handleChange) {
    values.file = file;
  }

  const handlerInputForm = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <Box paddingBottom={10}>
        <form
          onSubmit={event => {
            event.preventDefault();
            props.ad ? props.edit(values) : props.handlerAddAd(values);
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
            <Textarea
              value={values.description}
              variant="outline"
              type="text"
              maxLength={500}
              onChange={handlerInputForm}
              name="description"
              isRequired={true}
            />

            <Select
              mt={5}
              fontSize="sm"
              placeholder="Rooms..."
              variant="outline"
              value={values.room}
              onChange={handlerInputForm}
              name="room"
            >
              {nrOfRooms.map(room => {
                return <option value={room.value}>{room.label}</option>;
              })}
            </Select>

            <HStack mt={5}>
              <FormLabel fontSize="xs">Surface</FormLabel>
              <Input
                value={values.surface}
                variant="outline"
                type="number"
                onChange={handlerInputForm}
                name="surface"
              />

              <FormLabel fontSize="xs">Total price</FormLabel>
              <Input
                value={values.price}
                variant="outline"
                type="number"
                onChange={handlerInputForm}
                name="price"
                isRequired={true}
              />
            </HStack>

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

            <FormLabel mt={5} fontSize="xs">
              Uploade images
            </FormLabel>
            <input filename={values.file} name="file" type="file" onChange={handleChange} />
          </FormControl>
          <Button colorScheme="blue" mt={10} ml="40%" type="submit">
            Save
          </Button>
        </form>
      </Box>
    </>
  );
}

export default AddForm;
