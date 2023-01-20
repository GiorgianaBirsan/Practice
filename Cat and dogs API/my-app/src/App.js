import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import MainPage from './pages/MainPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainPage></MainPage>
    </ChakraProvider>
  );
}

export default App;
