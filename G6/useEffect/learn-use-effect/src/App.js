import { useEffect, useState } from "react";
const App=()=>{
  const [count,setcount]=useState(0);
  const [inp ,setinp]=useState("");
  useEffect(()=>{
      console.log("inside Use Effect ");
  },[]);
  console.log("render");
  return(
    <div>
      <input onChange={()=>setinp()}  value={inp}/>
      <h1>Count: {count}</h1>
      <button onClick={()=>setcount(count+1)}>increment</button>
    </div>
  );
}
export default App;
