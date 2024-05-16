import React, { useState } from 'react'
import Addtodo from './component/Addtodo';
import TodoList from './component/TodoList';

const App = () => {
  const [todos,setTodos]=useState([]);

  function  handler(todo)
  {
      setTodos([...todos,todo]);
  } 
  return (
    <div>
        <Addtodo onAddtodo={handler}/> 
        <TodoList todos={todos}/> 
    </div>
  )
}

export default App