import React from 'react'
import Link from 'next/link'



const Navbar = () => {


  return (
      <nav className="navbar flex flex-wrap items-center justify-between p-5 sm:p-7 mx-auto bg-stone-950 border-b-2 border-b-stone-800 bg-opacity-70 text-stone-100 fixed right-0 left-0 top-0 z-50">

          <div className="flex items-center px-4">
              <Link href={"/"} className='text-xl font-bold hover:text-stone-400'>adr577 </Link>
          </div>


          <div className="menu hidden md:block md:w-auto items-center " id="navbar">
              <ul className='flex space-x-4'>
                  <li><Link href={'/#projects'} className='block py-2 pl-3 pr-4 sm:text-lg rounded md:p-0'>Projects</Link></li>
                  <li><Link href={"/contact"} className='block py-2 pl-3 pr-4 sm:text-lg rounded md:p-0'>Contact</Link></li>
              </ul>

          </div>
      </nav>
  )
}

export default Navbar
