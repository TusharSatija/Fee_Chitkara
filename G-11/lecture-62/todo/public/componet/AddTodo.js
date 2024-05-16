import React, { useState } from 'react'

const AddTodo = ({onAddTodo}) => {
    const [txt,settext]=useState("");
    console.log(onAddTodo);

    function handle(e)
    {
        e.preventDefault();
        console.log(txt)
        onAddTodo({txt});
        settext("");
    }

  return (
    <form onClick={handle}>
        <input type='text' value={txt} 
         onChange={(e)=>settext(e.target.value)}  />
        <button type='submit'>AddTodo</button>
    </form>
  )
}

export default AddTodo