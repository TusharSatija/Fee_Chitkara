import { useState } from "react";

const App1=()=>{
    let count=0;
    const [count1,setCount]=useState(0);
    function handle()
    {
       setCount(count1+1); 
        count++;
        console.log(count);
    }   
    return(
        <div>
            <h1>count :{count}</h1>
            <h1>count1 :{count1}</h1>
            <button onClick={handle} >increment</button>
        </div>
    );   
}

export default App1;