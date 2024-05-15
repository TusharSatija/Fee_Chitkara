 const App=()=>{
  let count=0;
  function handle()
  {
    count++;
    console.log(count)
  }
  return (
      <div>
      <h1> Count : {count}</h1>
      <button onClick={handle}>increment</button>
    </div>
  );
 }

 export default App;

