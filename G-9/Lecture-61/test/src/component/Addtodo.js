import React, { useState } from 'react'

const Addtodo = ({onAddtodo}) => {
 
    const [txt,settext]=useState("");

    function handle(e)
    {
        e.preventDefault();
        onAddtodo({txt});
        settext("");
    }

  return (
    <form onSubmit={handle}>
        <input input="text" value={txt} placeholder='add todo'
                onChange={(e)=>settext(e.target.value)} />
        <button type='submit'>ADD TODO</button>
    </form>

  )
}

export default Addtodo