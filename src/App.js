// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Todos }  from './components/Todos';


let todos = [
  {id : 1 , value : "react" , completed: false},
  {id : 2 , value : "vdom" , completed: false},
  {id : 3 , value : "bable" , completed: true},
  {id : 4 , value : "webpack" , completed: true},

]
function App() {
  return (
    <div className="App">
    
      <Todos todos ={todos}/>
    </div>
  );
}

export default App;
