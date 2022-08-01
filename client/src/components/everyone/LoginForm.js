import {
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Spacer,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

function LoginForm({ setSignup, initialRef, setUser, handleClose }) {
  const initialFormData = {
    email_address: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState([]);

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function goToSignup() {
    setSignup(true);
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setUser(data);
          handleClose();
        }
      });
  }

  return (
    <ModalContent>
      <ModalHeader>Login</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <form onSubmit={handleLoginSubmit}>
          <FormControl isRequired>
            <FormLabel htmlFor="email_address">Email</FormLabel>
            <Input
              id="email_address"
              type="email_address"
              name="email_address"
              placeholder="example@example.com"
              value={formData.email_address}
              onChange={handleInputChange}
              ref={initialRef}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <br />
          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder=""
              value={formData.password}
              onChange={handleInputChange}
            />
          </FormControl>
          <br />
          {errors
            ? errors.map((error) => {
                return (
                  <>
                    <p key={error}>{error}</p>
                    <br />
                  </>
                );
              })
            : null}
          <Flex>
            <Spacer />
            <Button colorScheme="teal" type="submit">
              Login
            </Button>
            <Spacer />
          </Flex>
        </form>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="teal" variant="link" onClick={goToSignup}>
          Go to Signup
        </Button>
      </ModalFooter>
    </ModalContent>
  );
}

export default LoginForm;
