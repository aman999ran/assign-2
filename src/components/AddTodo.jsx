import React, { useState } from 'react'
// import {AddTodo} from "./AddTodo";
// import { Todo } from './Todo';

export const AddTodo = ({onAdd}) => {
const [newTodo,setNewTodo ] = useState("");

const postTodo = async (value)=>{
  let res = await fetch("http://localhost:3000/todos",{
    method : "POST",
    headers : {"content-type":"application/json"},
    body : JSON.stringify({
      value,
      completed :false,
    }),
  });

  let data = await res.json();
  // console.log(data);
  onAdd(data);

  };


  return (
    <div>

      <input type="text" placeholder='enter' 
      
      
      
      
      
      value = {newTodo} onChange={(e)=>setNewTodo(e.target.value) } />
      <button onClick={()=>{
  // onAdd(newTodo);
  let value =newTodo.trim();
  

  if(   value){
    postTodo(value)
    setNewTodo("")
  }
 
      }}>add</button>
    </div>
  )
}
