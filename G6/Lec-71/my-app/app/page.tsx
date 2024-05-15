const page = async () => {

    const res= await 
    
    fetch("https://api.tvmaze.com/singlesearch/shows?q=boys",
      {cache: '' }
    );
    const data = await res.json();

  return (
    <div>Learn Next.js</div>
  )
}

export default page