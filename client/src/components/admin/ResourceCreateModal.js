import { Button, Input, Select, FormControl, FormLabel} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react'
import { useState, useEffect} from "react";
function ResourceCreateModal({setCreateModalOpen, recCenterId, handleAddResource}){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [nameValue, setNameValue] = useState('')
  const [sportValue, setSportValue] = useState('')
  const handleNameChange = (event) => setNameValue(event.target.value)
  const handleSportChange = (event) => setSportValue(event.target.value)
  
  useEffect(() => {
    onOpen();
  }, []);

  function handleClose() {
    setCreateModalOpen(false);
    onClose();
  }
  const handleCreateResource = () => {
    handleClose();
    const newResource = { name: nameValue, rec_center_id: recCenterId, sports_type_id :sportValue};
    fetch("http://localhost:3000/resources",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       },
      credentials: 'include',
      body: JSON.stringify(newResource)
    })
    .then((r) => r.json())
    .then((newResource) => handleAddResource(newResource))
    setNameValue('')
    setSportValue('')
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
              <Button colorScheme='blue' mr={3} onClick={handleCreateResource} type="submit" form="create-form">
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
}

export default ResourceCreateModal;