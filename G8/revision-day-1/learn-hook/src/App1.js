import React from 'react'
const App1 = () => {
    let count=0;
    function handle()
    {
        count++;
        console.log(count);
    }
  return (
    <div>
        <h1> count : {count}</h1>
        <button onClick={handle}>increment</button>
    </div>
  )
}

export default App1