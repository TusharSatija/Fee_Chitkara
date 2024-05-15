import { useEffect, useState } from "react";

const App=()=>{
    const [data,setdata]=useState("");
    const [load ,setload]=useState(true);
    const [err,seterr]=useState(null);
    useEffect(()=>{
        const fetchdata=async ()=>{
            try{
                  const data=await fetch("https://api.tvmaze.com/singlesearch/shows?q=boy");
                  const res= await data.json();
                  setdata(res);
            }
            catch(err)
            {
                seterr(err);
            }
            finally{
                setload(false);
            }
        }
        fetchdata();

    },[]);

    if(load)
    {
      return (<h1> Loading ....... </h1>);
    }

    if(err)
    {
      return (<h1> Error occur something went wrong ...</h1>)
    }
    console.log(data);
    return (
        <div>
          data fetch ...
        </div>
    );

}
export default App;