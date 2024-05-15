import Link from "next/link"


const page = () => {
  return (
    <>
        <div>this is a test1 route </div>
        <button> 
            <Link href={'/test1/abc'}>abc Route</Link>    
        </button>
    </>

  )
}

export default page