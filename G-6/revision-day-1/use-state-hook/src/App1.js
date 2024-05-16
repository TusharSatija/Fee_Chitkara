import { useState } from "react";

const App1=()=>{
    const [count1,setcount1]=useState(0);
    function handle()
    { 
        setcount1(count1+1); 
    }
    return (
        <div>
            <h1> count : {count1}</h1>
            <button onClick={handle}>increment</button>
        </div>
    );
}
export default App1;