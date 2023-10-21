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

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(null); // Added state for selected picture
  const [isSubmitting, setIsSubmitting] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePictureChange = (e) => {
    // Get the selected file from the input field
    const file = e.target.files[0];
    setSelectedPicture(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setIsSubmitting(true);
    console.log(name, email, password, confirmPassword, selectedPicture);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired marginBottom={1}>
        <FormLabel>Name</FormLabel>
        <Input
          autoComplete={false}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl isRequired marginBottom={1}>
        <FormLabel>Email address</FormLabel>
        <Input
          autoComplete={false}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl isRequired marginBottom={1}>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            autoComplete={false}
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            pr="4.5rem"
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

      <FormControl isRequired marginBottom={1}>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            autoComplete={false}
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            pr="4.5rem"
          />
          <InputRightElement width="4.5rem">
            <IconButton
              h="1.75rem"
              size="sm"
              onClick={toggleConfirmPassword}
              aria-label={
                showConfirmPassword ? "Hide Password" : "Show Password"
              }
              icon={showConfirmPassword ? <ViewOffIcon /> : <ViewIcon />}
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Upload Picture</FormLabel>
        <Input
          type="file"
          accept="image/*"
          onChange={handlePictureChange} // Handle picture change
        />
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
        Signup
      </Button>
    </form>
  );
}
