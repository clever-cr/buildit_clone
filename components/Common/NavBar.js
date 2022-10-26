import Link from "next/link";

function NavBar(){
return(
    <>
    <div className='flex items-center justify-between px-40 bg-[#E1EBFA] py-4 text-[#486A6F]'>
    <h2>Buildit</h2>
        <div className='space-x-6 '>
        <Link href="/about">About</Link>
        <Link href="/">Services</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Contact</Link>
        </div>
       
          
        <button className="bg-darkblue text-white px-4 py-2 rounded-md">Need a project</button>
    </div>
        
       
    
    </>
)
}
export default NavBar;