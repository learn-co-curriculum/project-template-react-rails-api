import { SimpleGrid, Button, Heading, Flex, Spacer, Stack, Text, Input, Select, FormControl, FormLabel} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react'
import ResourceCard from "./ResourceCard";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";

function Resources() {
  const { rec_center_id } = useParams();
  const [recCenter, setRecCenter] = useState([]);
  const [resources, setResources] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [nameValue, setNameValue] = useState('')
  const [sportValue, setSportValue] = useState('')
  const handleNameChange = (event) => setNameValue(event.target.value)
  const handleSportChange = (event) => setSportValue(event.target.value)

  useEffect(() => {
    fetch(`http://localhost:3000/admin/rec_centers/${rec_center_id}/resources`)
        .then(res => res.json())
        .then((data) => setResources(data))
      }, [])

  useEffect(() => {
    fetch(`http://localhost:3000/rec_centers/${rec_center_id}`)
    .then(res => res.json())
    .then((data)=> setRecCenter(data))
  }, [])

  const handleCreateResource = (event) => {
    event.preventDefault();
    const newResource = { name: nameValue, rec_center_id: rec_center_id, sports_type_id :sportValue}
    fetch("http://localhost:3000/resources",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       },
       body: JSON.stringify(newResource)
    })
    .then((r) => r.json())
    .then((newResource) => console.log(newResource))
    setNameValue('')
    setSportValue('')
  }

  const resourceItems = resources.map((resource) => (
    <ResourceCard key={resource.id} resource={resource}/>
  ))

  return (
    <div>
      <Flex h='100px' >
        <Heading as='h1'>Resources at {recCenter.name}</Heading>
        <Spacer />
        <Button onClick={onOpen}>Add new resource</Button>
      </Flex>
      <SimpleGrid minChildWidth='340px' spacing='40px'>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create new resource</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form id="create-form" onSubmit={handleCreateResource}>
                <FormControl>
                    <FormLabel mb='8px'>Name:</FormLabel>
                      <Input
                        value={nameValue}
                        onChange={handleNameChange}
                        placeholder="Eg. Tom's pickleball court"
                        size='sm'
                      />
                    <FormLabel mb='8px'>Sport type:</FormLabel>
                    <Select placeholder='Select sport type' onChange={handleSportChange}>
                      <option value='1'>Pickleball</option>
                      <option value='2'>Tennis</option>
                      <option value='3'>Soccer</option>
                      <option value='4'>Ultimate</option>
                      <option value='5'>Kickball</option>
                    </Select>
                </FormControl>
                </form>
            </ModalBody>
            <ModalFooter>
              <Button variant='ghost'>Delete</Button>
              <Button colorScheme='blue' mr={3} onClick={onClose} type="submit" form="create-form">
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        {resourceItems}
      </SimpleGrid>
    </div>

  );
}

export default Resources;


