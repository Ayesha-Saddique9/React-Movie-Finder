import React from 'react'
import { Link } from 'react-router-dom'
function About() {
    return (
        <div className='bg-zinc-950 text-white min-h-screen'>
            <h1 className='text-4xl text-red-600 font-extrabold text-center mt-6'>About CineSearch</h1>
            <div className='bg-zinc-800 p-8 rounded-xl mt-10 max-w-3xl mx-auto'>
                <p className='text-zinc-400 text-lg leading-relaxed text-center'>CineSearch is a modern web application built to help users seamlessly discover their favorite movies, series, and detailed cinematic information. This project is a demonstration of real-time API fetching, robust state management, and dynamic routing.</p>
             <h1 className='mt-10 mb-4 font-bold text-2xl text-center'>Built with</h1>
             <div className='flex gap-4 justify-center'>
               <p className=' bg-blue-600 px-4 py-2 font-semibold shadow-lg rounded-full'>React.js</p>
               <p className='bg-teal-500 px-4 py-2 font-semibold shadow-lg rounded-full'>Tailwind CSS</p>
               <p className='bg-yellow-500 px-4 py-2 font-semibold shadow-lg rounded-full'>OMDB API</p>
               <p className='bg-red-500 px-4 py-2 font-semibold shadow-lg rounded-full'>React Routers</p>
             </div>

             <hr className='border-zinc-500 my-10'/>
             <h2 className='text-xl font-semibold text-center'>Developed by Ayesha Saddique</h2>
             <div className='flex justify-center'>
                <Link to='https://www.linkedin.com/in/ayesha-saddique9/'><img src="https://static.vecteezy.com/system/resources/previews/017/339/624/original/linkedin-icon-free-png.png" alt="" className='w-15 h-15' /></Link>
                <Link to='https://github.com/Ayesha-Saddique9'> <img src="https://pngimg.com/uploads/github/github_PNG85.png" alt="" className='w-15 h-15' /></Link>
            </div>
            </div>
        </div>
    )
}

export default About
