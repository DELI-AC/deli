"use client";

import React, { useState } from "react";
import {
  Box,
  Flex,
  Link as ChakraLink,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../images/deli_1_-removebg-preview.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box bg="Orange" boxShadow="md" px={8}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <ChakraLink as={RouterLink} to="/" ml="50px">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "60px", height: "60px" }}
          />
        </ChakraLink>
        <IconButton
          size="md"
          bg={"orange"}
          _hover={{ color: "blue.500" }}
          icon={isOpen ? <FiX /> : <FiMenu />}
          aria-label="Toggle menu"
          display={{ md: "none" }}
          onClick={toggleMenu}
        />
        <Flex display={{ base: "none", md: "flex" }} ml={10} mr={"190px"}>
          <Stack direction="row" spacing={6}>
            <ChakraLink
              as={RouterLink}
              to="/"
              color="gray.800"
              _hover={{ color: "blue.500" }}
            >
              Home
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to="/about"
              color="gray.800"
              _hover={{ color: "blue.500" }}
            >
              About
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to="/contact"
              color="gray.800"
              _hover={{ color: "blue.500" }}
            >
              Contact
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to="/login"
              color="gray.800"
              _hover={{ color: "blue.500" }}
            >
              Login
            </ChakraLink>
          </Stack>
        </Flex>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <ChakraLink
              as={RouterLink}
              to="/"
              color="gray.800"
              _hover={{ color: "blue.500" }}
            >
              Home
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to="/about"
              color="gray.800"
              _hover={{ color: "blue.500" }}
            >
              About
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to="/contact"
              color="gray.800"
              _hover={{ color: "blue.500" }}
            >
              Contact
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to="/login"
              color="gray.800"
              _hover={{ color: "blue.500" }}
            >
              Login
            </ChakraLink>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
