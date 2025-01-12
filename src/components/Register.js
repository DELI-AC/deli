import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Heading,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:8080/auth/register", {
        name,
        email,
        password,
      });

      toast({
        title: "Registration Successful!",
        description: "You can now log in with your credentials.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      navigate("/login");
    } catch (error) {
      if (error.response?.status === 409) {
        // Specific handling for user already exists
        toast({
          title: "User Already Exists!",
          description: "An account with this email already exists.",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Registration Failed!",
          description: error.response?.data || "An unknown error occurred.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt="8"
      p="6"
      boxShadow="lg"
      borderRadius="20px"
      bg="blue.900"
      color="white"
    >
      <Heading mb={6} textAlign="center">
        Register
      </Heading>
      <Input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        mb={3}
        border="1px solid grey"
        bg="blue.800"
        color="white"
      />
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        mb={3}
        border="1px solid grey"
        bg="blue.800"
        color="white"
      />
      <InputGroup mb={3}>
        <Input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          border="1px solid grey"
          bg="blue.800"
          color="white"
        />
        <InputRightElement width="4.5rem">
          <IconButton
            aria-label={showPassword ? "Hide Password" : "Show Password"}
            icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
            onClick={toggleShowPassword}
            variant="unstyled"
            color="white"
          />
        </InputRightElement>
      </InputGroup>
      <Button
        bg="#FF7622"
        color="white"
        borderRadius="20px"
        width="100px"
        _hover={{ bg: "orange.600" }}
        onClick={handleRegister}
      >
        Register
      </Button>
    </Box>
  );
};

export default RegisterPage;
