import React from 'react'
import PrintTodos from './PrintTodos';

const TodoList = ({todos}) => {
  return (
    <div> 
        <ul>
        {
            todos.map(todo=>(
                <PrintTodos todo={todo} />
            ))}
        </ul>
    </div>
  )
}
export default TodoList;