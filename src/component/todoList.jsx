import { useDispatch, useSelector } from "react-redux";
import {CheckIcon,CloseIcon} from "@chakra-ui/icons";
import { addTask, deleteTask, toggleTask } from "../redux/TodoSlice";

import {
    Input,
    Flex,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Checkbox,
    Button,
    Stack,
    Box,
    Heading,
    Text,
    Center
} from "@chakra-ui/react";
import { useState } from "react";


export function TodoList(props){
    const [newTask,setTask] = useState("");
    const todo = useSelector((state) => state.todo)
    const dispach = useDispatch()

    const handleTask= function (e){
        setTask(e.target.value)
        console.log();

    }
    const ajouter = ()=>{
        dispach(addTask(newTask))
    };
    return(
        <Center>
        <Stack spacing={8} direction='row' mt={10}>
                <Box p={5} shadow='md' borderWidth='1px' >
                    <Heading fontSize='xl'> nombre de tache {todo.length}</Heading>
                    <Text mt={4}>
                        <UnorderedList>
                            {todo.map((t)=>(<Todo id={t.id} text={t.text} completed={t.completed}/>))}
                        </UnorderedList>
                    </Text>
                    
                    <Text mt={4}>
                        <Input onChange={handleTask} placeholder='ajouter une tache ' />
                        <Button onClick={()=>{ajouter()}} variant='outline' colorScheme='blue'>ajouter</Button>
                    </Text>

                </Box>
        </Stack>
        </Center>
        
    );
}


function Todo({id,text,completed}){
    const dispach = useDispatch()
    return(
           <ListItem id={id.toString()}>
               <Flex p={4} >
                    {completed?<ListIcon as={CheckIcon} color='green.500' />:<ListIcon as={CloseIcon} color='red.500' />}
                    <Input variant='filled' htmlSize={4}  width='auto' placeholder={text} />
                    <Checkbox p={2} onChange={()=>{dispach(toggleTask(id))}}  defaultChecked={completed} ></Checkbox>
                    <Button onClick={()=>{dispach(deleteTask(id))}} variant='outline' colorScheme='red'>suprimer</Button>
               </Flex>
           </ListItem>

        )
}


