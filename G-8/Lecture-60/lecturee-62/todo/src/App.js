import React, { useState } from 'react';
import AddTodo from './componet/AddTodo';
import  TodoList from './componet/TodoList1'

const App = () => {
    const [todos,settodos]=useState([]);

    function handler(todo)
    {
        settodos([...todos,todo])
    }

  return (
    <div>
      <AddTodo  onAddTodo={handler}/>
      <TodoList  todos={todos} />

    </div>
  )
}

export default App