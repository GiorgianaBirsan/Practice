import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Button,
  Box,
  Grid,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Navbar justifySelf="flex-end" />
          <VStack spacing={8}>
            <Card align="center">
              <CardHeader>
                <Heading size="md"> Add a new apartment </Heading>
              </CardHeader>
              <CardBody>
                <Text> View a summary of all your apartments. </Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme="blue"> View here </Button>
              </CardFooter>
            </Card>
          </VStack>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
