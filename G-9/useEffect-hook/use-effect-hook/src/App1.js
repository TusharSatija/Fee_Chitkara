import { useEffect, useRef, useState } from "react";

const App1=()=>{
    const [count,setcount]=useState(0);
    const Prev=useRef(null);
    console.log(Prev);
    useEffect(()=>{
        Prev.current=count;
    })
    return(
        <div>
            <h1>Previous Count : {Prev.current}</h1>
            <h1> Count : {count}</h1>
            <button onClick={()=>setcount(count+1)}>increment</button>
        </div>
    );
}

export default App1;