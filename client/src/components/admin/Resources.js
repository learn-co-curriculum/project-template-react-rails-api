import { SimpleGrid, Button, Heading, Flex, Spacer} from '@chakra-ui/react'

import ResourceCreateModal from "./ResourceCreateModal";
import ResourceCard from "./ResourceCard";
import ResourceEditModal from './ResourceEditModal';
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";

function Resources() {
  const { rec_center_id } = useParams();
  const [recCenter, setRecCenter] = useState([]);
  const [resources, setResources] = useState([]);
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [activeResourceId, setActiveResource] = useState('')

  useEffect(() => {
    fetch(`http://localhost:3000/admin/rec_centers/${rec_center_id}/resources`, {
      method:'get',
      credentials: 'include'
      })
        .then(res => res.json())
        .then((data) => setResources(data))
      }, [])

  useEffect(() => {
    fetch(`http://localhost:3000/rec_centers/${rec_center_id}`, {
      method:'get',
      credentials: 'include'
      })
    .then(res => res.json())
    .then((data)=> setRecCenter(data))
  }, [])

  const resourceItems = resources.map((resource) => (
    <ResourceCard key={resource.id} resource={resource} setEditModalOpen={setEditModalOpen} setActiveResource={setActiveResource}/>
  ))

  function handleCreateOpen(){
    setCreateModalOpen(true)
  }

  function handleEditOpen(){
    setEditModalOpen(true)
  }

  function handleAddResource(newResource){
    console.log(newResource)
    console.log(resources)
    setResources(...resources, newResource)
  }
  return (
    <div>
      <Flex h='100px' >
        <Heading as='h1'>Resources at {recCenter.name}</Heading>
        <Spacer />
        <Button onClick={handleCreateOpen}>Add new resource</Button>
      </Flex>
      <SimpleGrid minChildWidth='340px' spacing='40px'>
        {createModalOpen ? (
          <ResourceCreateModal setCreateModalOpen={setCreateModalOpen} recCenterId={rec_center_id} handleAddResource={handleAddResource}/>
          ) : null}
        {editModalOpen ? (
          <ResourceEditModal setEditModalOpen={setEditModalOpen} recCenterId={rec_center_id} activeResourceId={activeResourceId}/>
          ) : null}
        {resourceItems}
      </SimpleGrid>
    </div>

  );
}

export default Resources;


