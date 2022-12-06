import React from 'react';
import { Grid, GridItem, Text, Tabs, TabList, TabPanels, Tab, TabPanel,Avatar, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import {   Menu, MenuButton,Button, Card, CardHeader, CardBody, CardFooter, Heading}  from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Dashboard (){
  function handleClick (){
    
  }
    return (

<Grid
  templateAreas={`"header header "
                  `}
  gridTemplateRows={'50px 1fr 10px'}
  gap='7'
  fontWeight='bold'
  paddingLeft={5}
  paddingRight={5}
  paddingTop={2}
  marginBottom={'2px'}
 
  // borderRadius='full'
  
>

  <GridItem pl='100' bg='white' display={'flex'} justifyContent='space-between' borderWidth='3px' borderColor={'blue.100'} borderRadius='lg' area={'header'}>
  <Tabs  marginLeft='-50px'>
  <TabList>
    <Tab>Board</Tab>
   
    <Link to= '/project/new'>
    <Tab>New Project + </Tab>
    </Link>

  </TabList>

  <TabPanels>
    <TabPanel>
    </TabPanel>
    <TabPanel>
    </TabPanel>
  </TabPanels>
  </Tabs>

  <Text textColor={"GrayText"} alignSelf='center' marginLeft='-150px' fontSize={"3xl"} ><b> Project-Manager </b></Text>
  
  <Menu >
  <MenuButton as ={Button} marginTop='3px' marginRight={'5px'} padding='5' leftIcon={<ChevronDownIcon />}>
      <Avatar size="sm" cursor={"pointer"} /> 
  </MenuButton>
  <MenuList>
      <MenuItem>My Profile</MenuItem>
      <MenuDivider />
      <MenuItem onClick={handleClick}>LogOut</MenuItem>
  </MenuList>
</Menu>
  </GridItem>


<Grid templateColumns='repeat(4, 1fr)'  gap={5}>
  <GridItem display="grid" borderRadius='lg' w='100%' h='740' bg='blue.100'  >

  <SimpleGrid spacing={4} overflow="scroll"  margin='10px' templateRows='repeat(auto-fill, minmax(200px, 1fr))'>
  <Card bg={'white'} >
    <CardHeader>
      <Heading size='md'>Project 1</Heading>
    </CardHeader>
    <CardBody >
      <Text textColor={"GrayText"}>Details ....</Text>
    </CardBody>
    <CardFooter>
      <Button>Assign</Button>
    </CardFooter>
  </Card>
  <Card bg={'white'}>
    <CardHeader>
      <Heading size='md'>Project 2</Heading>
    </CardHeader>
    <CardBody>
      <Text textColor={"GrayText"}>Details....</Text>
    </CardBody>
    <CardFooter>
      <Button>Assign</Button>
    </CardFooter>
  </Card>
  <Card bg={'white'}>
    <CardHeader>
      <Heading size='md'>Project 2</Heading>
    </CardHeader>
    <CardBody>
      <Text textColor={"GrayText"}>Details....</Text>
    </CardBody>
    <CardFooter>
      <Button>Assign</Button>
    </CardFooter>
  </Card>
  <Card bg={'white'}>
    <CardHeader>
      <Heading size='md'>Project 2</Heading>
    </CardHeader>
    <CardBody>
      <Text textColor={"GrayText"}>Details....</Text>
    </CardBody>
    <CardFooter>
      <Button>Assign</Button>
    </CardFooter>
  </Card>
  <Card bg={'white'}>
    <CardHeader>
      <Heading size='md'>Project 2</Heading>
    </CardHeader>
    <CardBody>
      <Text textColor={"GrayText"}>Details....</Text>
    </CardBody>
    <CardFooter>
      <Button>Assign</Button>
    </CardFooter>
  </Card>
  </SimpleGrid>
  </GridItem>


  <GridItem borderRadius='lg' w='350px' h='740' bg='blue.100' />
  <GridItem borderRadius='lg' w='350px' h='740' bg='blue.100' />
  <GridItem borderRadius='lg' w='107%' h='740' bg='blue.100' />
  
</Grid>
 
</Grid>

    )
}

export default Dashboard;