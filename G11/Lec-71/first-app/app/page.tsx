import Link from "next/link"
const page = async () => {

  const res=await 
  fetch("https://api.tvmaze.com/singlesearch/shows?q=boy", { cache :''}
  );
  const data= await res.json();
  return (
    <>
      <p>{ data.name}</p>
      <img src={data.image.medium} alt="nothing" srcset="" />
      <div>Learn Nextjs</div>
      <div>
        <Link  href={'/test1'}>test route</Link>
      </div>
    </>
  )
}

export default page