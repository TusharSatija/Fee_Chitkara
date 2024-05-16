import React, { useEffect, useState } from 'react'
import './App.css'
const App = () => {
  const [count,setcount]=useState(0);
  const [txt,result]=useState("");

  useEffect(()=>{
    console.log("inside use Effect");
  },[txt]);

  console.log("render");
  return (
    <div>
        <h1> {count} </h1>
        <input type='text' onChange={(e)=>{result(e.target.value)}}></input>
        <button className='btn' onClick={()=>setcount(count+1)}>increment</button>
    </div>
  )
}

export default App