import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        {
          name,
          email,
          password,
        },
      );
      alert(response.data.message); // Exibe a mensagem de resposta do servidor
    } catch (error) {
      alert(
        "Erro ao registrar: " +
        (error.response?.data?.message || error.message),
      );
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
        Registrar
      </Heading>
      <Input
        placeholder="Nome"
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
          placeholder="Senha"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          border="1px solid grey"
          bg="blue.800"
          color="white"
        />
        <InputRightElement width="4.5rem">
          <IconButton
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
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
        Registrar
      </Button>
    </Box>
  );
};

export default RegisterPage;
