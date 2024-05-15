const { useState, useEffect } = require("react");


const App=()=>{
  const [count,setcount]=useState(0);
  const [inp, setinp]=useState("");
  useEffect(()=>{
    console.log("inside useEffect");
  },[inp]);
  console.log("render");
  return(
    <div>
      <input type="text"  value={inp}  onChange={
        (e)=>setinp(e.target.value)}></input>
      <h1> count : {count}</h1>
      <button onClick={()=>setcount(count+1)}>
        increment
      </button>
    </div>
  );
}

export default App;