import Link from "next/link";

const page= async ()=>{
 
  const data=await fetch("https://api.tvmaze.com/singlesearch/shows?q=boy",
    {cache : ''}
  );

  const res= await data.json();

  return (
    <>
      <p>{res.name}</p>
      <img src={res.image.medium} alt="nothing" srcset="" />
      <div>Learn next.js</div>
      <Link href={'/new'} >new</Link>
      <Link href={'/new/innerpage'} > new/inner</Link>
    </>
  );
}


export default page;