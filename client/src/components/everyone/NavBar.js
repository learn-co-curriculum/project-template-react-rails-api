import { Flex, Spacer, Box, Heading, Button, ButtonGroup, Breadcrumb, BreadcrumbLink, BreadcrumbItem } from '@chakra-ui/react'
import { Link } from "react-router-dom";

function NavBar() {
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
    <Flex minWidth='max-content' alignItems='center' gap='2'>
    <Box p='2'>
      <Heading size='md'><img src="./images/reserve_set_play_logo.png"></img></Heading>
    </Box>
    <Breadcrumb separator='|'>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to='/admin'>
          Calendar
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to='/admin/rec_centers'>
          Recreation Centers
        </BreadcrumbLink>
      </BreadcrumbItem>
      {/* <BreadcrumbItem>
        <BreadcrumbLink as={Link} to='/home/my_reservations'>
          Dashboard
        </BreadcrumbLink>
      </BreadcrumbItem> */}
    </Breadcrumb>
    <Spacer />
      <Button colorScheme='teal'>Log out</Button>
  </Flex>
  );
}

export default NavBar;
