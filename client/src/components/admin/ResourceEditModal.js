import { Button, Input, Select, FormControl, FormLabel} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react'
import { useState, useEffect} from "react";

function ResourceEditModal({setEditModalOpen, activeResourceId, removeResource}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [nameValue, setNameValue] = useState('')
  const [sportValue, setSportValue] = useState('')
  const handleNameChange = (event) => setNameValue(event.target.value)
  const handleSportChange = (event) => setSportValue(event.target.value)

  useEffect(() => {
    onOpen();
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/resources/${activeResourceId}`, {
      method:'GET',
      credentials: 'include'
      })
        .then(res => res.json())
        .then((data) => {
          setNameValue(data.name)
          setSportValue(data.sports_type.id)
        })
      }, [])

  function handleClose() {
    setEditModalOpen(false);
    onClose();
  }

  function handleUpdateResource(e){
    e.preventDefault();
    const updatedResource = {name: nameValue, sports_type_id :sportValue}
    fetch(`http://localhost:3000/resources/${activeResourceId}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
       },
      credentials: 'include',
      body: JSON.stringify(updatedResource)
    })
    .then((r) => r.json())
    .then((resource) => console.log(resource))
  }

  function handleDeleteResource(){
    handleClose()
    fetch(`http://localhost:3000/resources/${activeResourceId}`, {
      method: "DELETE",
      credentials: 'include'
    })
    .then(removeResource(activeResourceId))
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Create new resource</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <form id="create-form">
          <FormControl>
              <FormLabel mb='8px'>Name:</FormLabel>
                <Input
                  value={nameValue}
                  onChange={handleNameChange}
                  placeholder="Pick a new name"
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
        <Button variant='ghost' onClick={handleDeleteResource}>Delete</Button>
        <Button colorScheme='blue' mr={3} onClick={handleUpdateResource} type="submit" form="create-form">
          Update
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  );
}

export default ResourceEditModal;
