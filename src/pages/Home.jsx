import React from "react";
import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <VStack spacing={6} mt={8}>
      <Heading>Welcome to Mail.Enc</Heading>
      <Text fontSize="lg" textAlign="center" px={8}>
        The ultimate platform to secure your emails with end-to-end encryption.
        Start by downloading our browser extension or managing your keys on the KeyServer page.
      </Text>
      <Button colorScheme="blue" size="lg">
        Get Started
      </Button>
    </VStack>
  );
};

export default Home;
