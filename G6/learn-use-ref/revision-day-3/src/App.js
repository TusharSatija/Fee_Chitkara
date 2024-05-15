import { useEffect, useRef, useState } from "react";
const App=()=>{
  const ref=useRef(null);
  console.log(ref);
  useEffect(()=>{
      ref.current=count;
  })
  const [count,setcount]=useState(0);
  return (
    <div>
      <h1> Previos count : {ref.current}</h1>
      <h1>current count : {count}</h1>
        <button onClick={()=>setcount(count+1)}>click</button>
    </div>
  );
} 
export default App;