import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <div className='flex justify-between border-zinc-800 items-center shadow-lg py-5 px-8 border-b'>
            <Link to='/' className='text-red-600 font-extrabold text-3xl tracking-wider'>🎬 CineSearch</Link>
        <div className='flex items-center text-zinc-400 gap-10 mr-20 text-2xl font-norma'>
    <Link to='/' className='hover:text-white transition-colors duration-200'>Home</Link>
    <Link to='/about' className='hover:text-white transition-colors duration-200'>About</Link>
  </div>
  </div>
    </div>
  )
}

export default Navbar
