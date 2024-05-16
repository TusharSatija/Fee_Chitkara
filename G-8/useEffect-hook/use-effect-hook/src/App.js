const { useState, useEffect } = require("react");
const App=()=>{
  const [count,setcount]=useState(0);
  const [inp,setinp]=useState("");
  useEffect(()=>{
    console.log("inside use Effect ....");
  },[inp]);
  console.log("render");
  return (
    <div>
        <h1> Count :{count}</h1>
        <input  type="text"  value={inp} 
         onChange={(e)=>setinp(e.target.value)}></input>
        <button onClick={()=>setcount(count+1)}>
          increment.....
        </button>
    </div>
  );

}

export default App;