import { useState } from "react"

const App2=()=>{
    const [str,setStr]=useState("tushar");

    function handle()
    {
        setStr(str+" Satija ");
    }

    return(
        <div>
            <h1>Name : {str}</h1>
            <button onClick={handle}>full name
            </button>
        </div>
    );
}
export default App2;