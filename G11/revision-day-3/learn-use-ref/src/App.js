import { useEffect, useRef, useState } from "react";

const App=()=>{
  // useRef  hook is a mutable object in which a current property is available inside it 
  const ref=useRef(null);
  useEffect(()=>{
      ref.current=count; 
  })
  const [count,setcount]=useState(0);
    return (
      <div>
          <h1> Previous count : {ref.current}</h1>
          <h1> count      : {count}</h1>
          <button onClick={()=>setcount(count+1)}>
            click</button> 
      </div>
    );

}
export default App;