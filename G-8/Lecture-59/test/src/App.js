import React, { useEffect, useRef, useState } 
from 'react';

const App = () => {
  const [count,setCount]=useState(0);
  const prevCount=useRef(null);

  useEffect(()=>{
    prevCount.current=count;
  })

  return (
    <div>
      <h1>Previous Count : {prevCount.current}</h1>
      <h2>Count  :  { count}</h2>
      <button  onClick={()=>{setCount(count+1)}}>
        increment
      </button>
    </div>
  )
}

export default App