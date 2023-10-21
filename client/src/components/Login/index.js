import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function Login() {
  // Declaring Form States.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Declaring Input Controllers
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(email, password);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired marginBottom={3}>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            pr="4.5rem" // To accommodate the icon
          />
          <InputRightElement width="4.5rem">
            <IconButton
              h="1.75rem"
              size="sm"
              onClick={togglePassword}
              aria-label={showPassword ? "Hide Password" : "Show Password"}
              icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        style={{ display: "block" }}
        width="100%"
        type="submit"
        onClick={handleSubmit}
        mt={4}
        isLoading={isSubmitting}
        loadingText="Submitting"
        colorScheme="blue"
      >
        Login
      </Button>

      <Button
        style={{ display: "block" }}
        width="100%"
        type="button"
        mt={4}
        colorScheme="red"
      >
        Login as a guest
      </Button>
    </form>
  );
}
