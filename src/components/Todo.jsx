import React from 'react'
import { useState } from 'react';
import styles  from "./todo.module.css";
 export const Todo = ({ todo ,onDelete,onEdit}) => {

const [isEditable,setIsEditable] = useState(false);
const [value,setValue] = useState(todo.value);


  const deleteTodo = async()=>{
     await fetch(`http://localhost:3000/todos/${todo.id}`,{
      method : "DELETE",
      headers : {"content-type":"application/json"},
     
    });
  onDelete(todo.id)
  };

  const editTodo = async()=>{
    let res = await fetch(`http://localhost:3000/todos/${todo.id}`,{
     method : "PATCH",
     headers : {"content-type":"application/json"},
    body : JSON.stringify({
      value,
      completed : true,
    })
   });
//  onDelete(todo.id)
let data = await res.json();
// console.log(data);
onEdit(data)
 };
 
 return (
    <div className={`${styles.flex} ${todo.completed ?   styles.line : "" }`}>
      
      {
        isEditable ? (
          <div>

          <input type="text" placeholder='enter' 
          value = {value} 
          onChange={(e)=>setValue(e.target.value) } />
          <button onClick={()=>{
      // onAdd(newTodo);
      let v =value.trim();
      
    
      if(v){
        
        editTodo(value);
        setIsEditable(false);
      }
      }}>update</button>
        </div>

        ) : (
          <div>
            {todo.value}</div>
        )}
         <div>

<button onClick={()=>setIsEditable(!isEditable)}>Edit</button>
<button onClick={deleteTodo}>delete</button>


</div>
</div>
);
        }
      
      
      
      
  

