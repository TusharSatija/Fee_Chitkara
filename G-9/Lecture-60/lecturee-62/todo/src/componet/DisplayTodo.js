import React from 'react'

const DisplayTodo = ({todo}) => {
  return (
    <li>
        {todo.txt}
    </li>
  )
}

export default DisplayTodo