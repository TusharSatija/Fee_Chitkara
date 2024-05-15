import Link from "next/link"


const page = () => {
  return (
    <>
    <div>this is a abc route inside test1</div>
    <button>
        <Link href={'/'}>home Route</Link>
    </button>
    </>
  );
}

export default page