import { SimpleGrid, Button, Heading, Flex, Spacer} from '@chakra-ui/react'

import ResourceCard from "./ResourceCard";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";

function Resources() {
  const { rec_center_id } = useParams();
  const [resources, setResources] = useState([]);
  const [recCenter, setRecCenter] = useState([]);

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

  const resourceItems = resources.map((resource) => (
    <ResourceCard key={resource.id} resource={resource}/>
  ))

  return (
    <div>
      <Flex h='100px' >
        <Heading as='h1'>Resources at {recCenter.name}</Heading>
        <Spacer />
        <Button>Add new resource</Button>
      </Flex>
      <SimpleGrid minChildWidth='340px' spacing='40px'>
        {resourceItems}
      </SimpleGrid>
    </div>

  );
}

export default Resources;
