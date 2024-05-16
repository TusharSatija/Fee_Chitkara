'use client'
import { todo } from "node:test";
import { useState } from "react";
const Home=()=>{
    const [Todos,SetTodo]=useState([""]);
    const [inp,setInp]=useState("");
  function handle(e)
  {
      setInp(e.target.value);
  }

  function AddTodo()
  {
    if(inp.trim()!=="")
      {
        SetTodo([...Todos,inp]);
        console.log(Todos);
        setInp("");
      }
  }
  return (
    <>
    <h1> Todo List </h1>
      <input type="text" onChange={handle}  placeholder=" add todo" /> 
      <button onClick={AddTodo}>ADD TODO</button> 


      <ul>
        {
          Todos.map((todo,index)=>(
            <li key={index}>{todo}</li>
          ))
        }
      </ul>
    </>
  );
}

export default Home;