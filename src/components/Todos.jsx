import React, { useEffect } from 'react';
import { AddTodo } from './AddTodo';
import { Todo } from "./Todo";
import { useState } from 'react';

//  export const Todos = ({ todos }) => {
  
//   return (
    
  
//     <div>
     
//       <AddTodo/>
//         {todos.map((todo)=>(
//             <Todo key= {todo.id}todo={todo}/>
//         ))}
//     </div>
//     );
// };  [[[[[[[[[THIS IS MANUALLY VALA CODE CAN CHECK IT OUT]]]]]]]]]
// export default Todos;

export const Todos = () => {
  const [todos,setTodos] = useState([]);

 

  const onAdd = (newTodo)=>{
  //  POST
 setTodos([  ...todos,newTodo
 ])
  };

  const onDelete = (id) =>{
    const newTodos = todos.filter((todo)=> todo.id !== id);
    setTodos(newTodos);
  }

  const onEdit = (newTodo) =>{
    const newTodos = todos.map((todo)=> {
   if( todo.id === newTodo.id ) return newTodo;
    else return todo;
  });
  setTodos(newTodos);
  };
  // http://localhost:3000/todos

  useEffect(()=>{
    
    const getTodos = async()=>{
      try{
        let res = await fetch("http://localhost:3000/todos?_page=1")
        let data = await res.json() ;
        console.log(data); 
       setTodos(data)
       
      }
      catch(err){
        console.log(err)
      }
   };
 getTodos();
 },[])
  return (
   <div>
     
      <AddTodo onAdd={onAdd}/>
        {todos.map((todo)=>(
            <Todo key= {todo.id}todo={todo} onDelete={onDelete} onEdit={onEdit}/>
        ))}
    </div>
    );
};
