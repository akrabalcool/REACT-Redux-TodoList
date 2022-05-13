import { createSlice } from "@reduxjs/toolkit";
let id=3;
export const todoSlice = createSlice({
    name:"todo",

    initialState:[
        {id:1,text:"manger",completed:true},
        {id:2,text:"dormi",completed:false},
    ],
    reducers:{
        addTask:(state,action)=>{
            //action:{type: "todo/addTask",payload:{text: jorja Smith}"}
            const newTask = {
                id: id++,
                text: action.payload,
                completed:false
            }
            state.push(newTask)
        },
        toggleTask:(state,action)=>{
            //action:{type: "todo/toggleTask",payload:{id: 2}"}
            let todo = state.find(todo => todo.id === action.payload)
            todo.completed = !todo.completed
        },
        deleteTask:(state,action)=>{
            //action:{type: "todo/deleteTask",payload:{id: 2}"}
             state = state.filter(todo => todo.id !== action.payload);
             return state;
        }
    }
})

export const {addTask,toggleTask,deleteTask} = todoSlice.actions

