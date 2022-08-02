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

function SignupForm({ setSignup, initialRef, setUser, handleClose }) {
  const initialFormData = {
    first_name: "",
    last_name: "",
    email_address: "",
    password: "",
    password_confirmation: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState([]);

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function goToLogin() {
    setSignup(false);
  }

  function handleSignupSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
          setFormData({
            ...formData,
            password: "",
            password_confirmation: "",
          });
        } else {
          setUser(data);
          handleClose();
        }
      });
  }

  return (
    <ModalContent>
      <ModalHeader>Signup</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <form onSubmit={handleSignupSubmit}>
          <FormControl isRequired>
            <FormLabel htmlFor="first_name">First Name</FormLabel>
            <Input
              id="first_name"
              type="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              ref={initialRef}
            />
          </FormControl>
          <br />
          <FormControl isRequired>
            <FormLabel htmlFor="last_name">Last Name</FormLabel>
            <Input
              id="last_name"
              type="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
            />
          </FormControl>
          <br />
          <FormControl isRequired>
            <FormLabel htmlFor="email_address">Email</FormLabel>
            <Input
              id="email_address"
              type="email_address"
              name="email_address"
              placeholder="example@example.com"
              value={formData.email_address}
              onChange={handleInputChange}
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
          <FormControl isRequired>
            <FormLabel htmlFor="password_confirmation">
              Confirm password
            </FormLabel>
            <Input
              id="password_confirmation"
              type="password"
              name="password_confirmation"
              placeholder=""
              value={formData.password_confirmation}
              onChange={handleInputChange}
            />
          </FormControl>
          <br />
          {errors
            ? errors.map((error) => {
                return (
                  <div key={error}>
                    <p>{error}</p>
                    <br />
                  </div>
                );
              })
            : null}
          <Flex>
            <Spacer />
            <Button colorScheme="teal" type="submit">
              Signup
            </Button>
            <Spacer />
          </Flex>
        </form>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="teal" variant="link" onClick={goToLogin}>
          Go to Login
        </Button>
      </ModalFooter>
    </ModalContent>
  );
}

export default SignupForm;
