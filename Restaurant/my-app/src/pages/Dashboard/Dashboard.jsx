import {Heading, Image, HStack, Card} from "@chakra-ui/react";
import React from "react";
import {useNavigate} from "react-router-dom";
import {ButtonUI} from "../../components";
import {pagesPath} from "../../utils/pagesPaths";
import { collectionRestaurantRef, collectionUserRef, database } from "../../firebase";
import { currentUser } from "../../firebase";

export default function Dashboard() {
  const navigate = useNavigate();

  // let userRef= database.collection("RESTAURANTS")
  // let query = userRef.where("RESTAURANTS", "==", true);

  return (
    <Card
      variant="elevated"
      justify-content="center"
      align-items="center"
      w="80%"
      m="auto"
      mt="10%"
      mb="auto"
      direction="column"
      alignItems="center"
      p="30px"
      shadow="lg"
    >
      <Heading>Welcome to the Restaurant</Heading>
      <Image
        src="https://www.zarla.com/images/zarla-experikitchen-1x1-2400x2400-20211203-4txykj4pjv9v6439rbfp.png?crop=1:1,smart&width=250&dpr=2"
        boxSize="200px"
        objectFit="cover"
        mt={50}
        mb={150}
      />
       
      <HStack gap="300px">

if()
        <ButtonUI
          onClick={() => navigate(pagesPath.LANDING)}
          children="Log out"
        />

        <ButtonUI
          onClick={() => navigate(pagesPath.LANDING)}
          children="Log out"
        />
      </HStack>
    </Card>
  );
}
