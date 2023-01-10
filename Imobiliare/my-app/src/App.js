import React from 'react';
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Dashboard> </Dashboard>
    </ChakraProvider>
  );
}

export default App;
