import React from 'react';
import { BrowserRouter, Rout, Link } from 'react-router-dom';
import { Text, Heading, Button } from '@chakra-ui/react';

function Navbar() {
  return (
    <>
      <Button
        size="md"
        height="48px"
        width="200px"
        border="2px"
       marginLeft="2"
               >
        Add
      </Button>

    </>
  );
}

export default Navbar;
