import React, {useState} from 'react';
import ProjectTaskList from './ProjectTaskList';
import { Button,Box,Container, FormControl, FormLabel, Input, VStack, HStack } from "@chakra-ui/react";


function AddProject (){
    const[projectTitle, setProjectTitle]=useState("")
    const[descriprtion, setDescription]=useState("")
    const [content, setContent]=useState("")

     function handleSubmit (e){
        e.preventDefault()

        // fetch(" ", {
        //     method: "POST",
        //     headers:{
        //         "Content-Type": "application/json",
        //     }, 
        //     body: JSON.stringify({
        //         task: ?
        //     }), 
        // })
        // .then ((r)=>r.json())
        // .then((newTask)=> {
        //     onAddTask(newTask);
        //     setTask('');
        // })

     }
     function handleFormSubmit(){


     }
   

    return (
        <Container  maxW= "xl" centerContent justifyItems={'center'} >
        <Box 
        bg= "white" 
        justifyContent={'center'}
        margin='100px'  
        width="100%"
        height='auto' p="4" 
        borderRadius='20px' 
        borderWidth= "5px"
        display={'flex'}
        > 
        <VStack width='100%' spacing={'15px'}> 
           <FormControl id="project-title" isRequired>
            <FormLabel>Project title</FormLabel>
            <Input h="30px" placeholder="Enter project title ... " 
            onChange={e=>setProjectTitle(e.target.value)}></Input>
           </FormControl>

           <FormControl id="descriprtion" >
            <FormLabel>Description</FormLabel>
            <Input h="100px"  paddingTop='1px' textAlign={"left"} placeholder="Details..." 
            onChange={e=>setDescription(e.target.value)}></Input>
           </FormControl>

           
           <FormControl id="task-input" >
           <FormLabel>Project Task List - </FormLabel>
           <HStack width='100%' spacing={'10px'}>
           <Input  h="30px" placeholder="Add Tasks...." 
            onChange={e=>setContent(e.target.value)}></Input>
            <Button height={'30px'} colorScheme={'whatsapp'} onClick={handleSubmit}>Add Task</Button>
            {/* <ProjectTaskList></ProjectTaskList> */}
            </HStack>
           </FormControl>
        
         
           <Button  colorScheme={"blue"}
           width="50%"
           style={{marginTop: '50px'}}
           onClick={handleFormSubmit}>
            Add Project
           </Button>
        </VStack>
        </Box> 
        </Container>
    )

}






export default AddProject; 