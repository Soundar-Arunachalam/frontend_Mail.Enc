import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const KeyServer = () => {
  return (
    <VStack spacing={6} mt={8}>
      <Heading>KeyServer Management</Heading>
      <Text fontSize="lg" textAlign="center" px={8}>
        Manage your public/private keys securely on our KeyServer. Use this
        page to upload, delete, or update your encryption keys.
      </Text>
    </VStack>
  );
};

export default KeyServer;
