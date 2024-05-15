//rafce
const page = async () => {

  const res= await 
  fetch("https://api.tvmaze.com/singlesearch/shows?q=boys" ,{cache :'default'});
  const data = await res.json();
  return (
    <>
      <h1> {data.name}</h1>
      <img src={data.image.medium} alt="nothing" srcset="" />
       <div>This is a new route page ..</div>
    </>
  )
}

export default page