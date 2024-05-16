import React from 'react'
import DisplayTodo from './DisplayTodo'

const Todolist = ({todos}) => {
 
  return (
    <ol>
       {
         todos.map(todo=>(
            <DisplayTodo  todo={todo}/>
         ))}
    </ol>
  )
}

export default Todolist