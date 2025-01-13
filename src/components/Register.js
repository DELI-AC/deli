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
  Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const toggleShowPassword = () => setShowPassword(!showPassword);

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = async () => {
    // Frontend validation before sending to backend
    if (!name.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your name.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      return;
    } else {
      setEmailError("");
    }

    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a digit, and a special character",
      );
      return;
    } else {
      setPasswordError("");
    }

    // Send data to backend
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
        toast({
          title: "User Already Exists",
          description: "An account with this email already exists.",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Registration Failed",
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
      {emailError && (
        <Text color="red.500" fontSize="sm" mb={3}>
          {emailError}
        </Text>
      )}

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
      {passwordError && (
        <Text color="red.500" fontSize="sm" mb={3}>
          {passwordError}
        </Text>
      )}

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
