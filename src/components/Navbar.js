import React from "react";
import { Box, Flex, HStack, Link, Button, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.600" px={4} py={3} shadow="md">
      <Flex alignItems="center">
        {/* Logo */}
        <Text fontSize="2xl" fontWeight="bold" color="white">
          Mail.Enc
        </Text>
        <Spacer />

        {/* Navbar Links */}
        <HStack spacing={8}>
          <NavLink to="/">
            <Link fontSize="lg" color="white" _hover={{ color: "yellow.300" }}>
              Home
            </Link>
          </NavLink>
          <NavLink to="/keyserver">
            <Link fontSize="lg" color="white" _hover={{ color: "yellow.300" }}>
              KeyServer
            </Link>
          </NavLink>
          <Button colorScheme="teal" size="sm" onClick={() => alert("Downloading extension...")}>
            Download Extension
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
