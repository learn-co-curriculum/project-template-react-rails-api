import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  ButtonGroup,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar({ setLoginModalOpen, user, setUser }) {
  const [navigation, setNavigation] = useState(null);

  const notLoggedInNavigation = (
    <Breadcrumb separator="|">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/">
          Calendar
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
  const adminNavigation = (
    <Breadcrumb separator="|">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/admin">
          Calendar
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/admin/rec_centers">
          Recreation Centers
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
  const playerNavigation = (
    <Breadcrumb separator="|">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/home">
          Calendar
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/home/my_reservations">
          Reservations
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );

  useEffect(() => {
    if (user.user_type) {
      switch (user.user_type.user_type) {
        case "admin":
          setNavigation(adminNavigation);
          break;
        case "player":
          setNavigation(playerNavigation);
          break;
        default:
          setNavigation(notLoggedInNavigation);
      }
    } else {
      setNavigation(notLoggedInNavigation);
    }
  }, [user]);

  function handleLogin() {
    setLoginModalOpen(true);
  }

  function handleLogout() {
    fetch("http://localhost:3000/logout", {
      method: "DELETE",
      credentials: "include",
    }).then((res) => setUser({}));
  }

  return (
    // Logged out user
    // <Flex minWidth='max-content' alignItems='center' gap='2'>
    //   <Box p='2'>
    //     <Heading size='md'><img src=".../images/reserve_set_play_logo.png"></img></Heading>
    //   </Box>
    //   <Spacer />
    //   <ButtonGroup gap='2'>
    //     <Button colorScheme='teal'>Log in</Button>
    //     <Button colorScheme='teal'>Sign Up</Button>
    //   </ButtonGroup>
    // </Flex>
    // Logged in player
    //   <Flex minWidth='max-content' alignItems='center' gap='2'>
    //   <Box p='2'>
    //     <Heading size='md'><img src="./images/reserve_set_play_logo.png"></img></Heading>
    //   </Box>
    //   <Breadcrumb separator='|'>
    //     <BreadcrumbItem>
    //       <BreadcrumbLink as={Link} to='/home'>
    //         Calendar
    //       </BreadcrumbLink>
    //     </BreadcrumbItem>
    //     <BreadcrumbItem>
    //       <BreadcrumbLink as={Link} to='/home/my_reservations'>
    //         Reservations
    //       </BreadcrumbLink>
    //     </BreadcrumbItem>
    //   </Breadcrumb>
    //   <Spacer />
    //     <Button colorScheme='teal'>Log out</Button>
    // </Flex>
    //Logged in admin
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      bg="green.300"
      p="2"
    >
      <Box p="2">
        <Heading size="md">
          <img src="./reserve_set_play_logo.png"></img>
        </Heading>
      </Box>
      {navigation}
      {/* <BreadcrumbItem>
        <BreadcrumbLink as={Link} to='/home/my_reservations'>
          Dashboard
        </BreadcrumbLink>
      </BreadcrumbItem> */}
      <Spacer />
      {user.id ? (
        <Button colorScheme="red" onClick={handleLogout}>
          Log out
        </Button>
      ) : (
        <Button colorScheme="teal" onClick={handleLogin}>
          Log in
        </Button>
      )}
    </Flex>
  );
}

export default NavBar;
