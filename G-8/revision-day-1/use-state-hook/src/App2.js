import { useState } from "react";

const App2=()=>{
    const [str,setstr]=useState("tushar");

    return(
        <div>
            <h1> Name : {str}</h1>
            <button onClick={()=>{setstr(str+" satija")}}> full name</button>
        </div>
    );
}
export default App2;