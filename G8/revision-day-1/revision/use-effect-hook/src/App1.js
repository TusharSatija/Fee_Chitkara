import { useEffect, useRef, useState } from "react";
const App1=()=>{
    const [count,setcount]=useState(0);
    const prev=useRef(null);
    console.log(prev);
    useEffect(()=>{
        prev.current=count;
    })
    return (
        <div>
            <h1> Previous count : {prev.current}</h1>
            <h1> Current Count : {count}</h1>
            <button onClick={()=>setcount(count+1)}>increment</button>
        </div>
    );
}

export default App1;