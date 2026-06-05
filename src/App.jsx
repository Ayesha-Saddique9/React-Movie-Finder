import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Moviedetails from './Components/Moviedetails'


function App() {
  return (
    <div className='bg-zinc-950 min-h-screen font-sans'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/movie/:id' element={<Moviedetails/>}/>
      </Routes>
    </div>
  )
}

export default App
