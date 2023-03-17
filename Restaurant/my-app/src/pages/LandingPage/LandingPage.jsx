import { Image, HStack, Heading, Card} from "@chakra-ui/react";
import React, {useState} from "react";

import {ButtonUI, LogInForm, ModalUI, RegisterForm} from "../../components";

const modalIds = {
  register: "register",
  login: "login",
};

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalId, setModalId] = useState("");
 
  return (
    <>
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
          <ButtonUI
            onClick={() => {
              setIsOpen(!isOpen);
              setModalId(modalIds.login);
            }}
          >
            LogIn
          </ButtonUI>

          <ButtonUI
            onClick={() => {
              setIsOpen(!isOpen);
              setModalId(modalIds.register);
            }}
          >
            Register
          </ButtonUI>
        </HStack>
      </Card>

      <ModalUI
        isOpen={isOpen}
        modalId={() => setModalId(modalId)}
        setIsOpen={() => setIsOpen(!isOpen)}
        children={
          modalId === modalIds.register ? (
            <RegisterForm handlerModalVisibility={setIsOpen} />
          ) : (
            <LogInForm handlerModalVisibility={setIsOpen} />
          )
        }
        title={modalId === modalIds.register ? "Register" : "LogIn"}
      ></ModalUI>
    </>
  );
}
