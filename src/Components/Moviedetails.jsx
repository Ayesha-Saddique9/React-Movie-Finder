import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Moviedetails() {
   const [movieData,setMovieData] = useState(null);
   const[loading,setLoading] = useState(true);
   const [error,setError] = useState(null)
   const {id} = useParams();

   async function fetchMovieDetails(){
       setLoading(true)
   setError(null)
   const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=fe2a0cf`);
   const data = await response.json();
   if(data.Response === 'True'){
     console.log(data);
   setMovieData(data);
   setLoading(false)
   }
   else{
    setError('Movie not found!')
   }
} 

useEffect(()=>{
  fetchMovieDetails();
},[id])
 return (
    <div>
      {movieData && <div className='text-zinc-400 gap-10 p-8 flex flex-col md:flex-row mt-10'>
        <img src={movieData.Poster} onError={(e)=> e.target.src = 'https://png.pngtree.com/png-vector/20221125/ourlarge/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg'} alt="" className='w-79 h-73 mt-4 ml-10 '/>
        <div>
        <h1 className='text-white font-extrabold text-4xl md:text-5xl mb-4'>Title: {movieData.Title}</h1>
        <div className='flex flex-wrap gap-4 font-medium text-zinc-400 mb-8'>
        <p>Year: {movieData.Year}</p>
        <p>Runtime: {movieData.Runtime}</p>
        <p>Genre: {movieData.Genre}</p>
        </div>
        <h2 className='text-red-500 font-bold text-xl mt-8 mb-2'>Plot</h2>
        <p className='text-zinc-300 leading-relaxed text-lg'>{movieData.Plot}</p>
          <h2 className='text-red-500 font-bold text-xl mt-8 mb-2'>Cast</h2>
        <p className='text-zinc-300 leading-relaxed text-lg'>{movieData.Actors}</p>
          <h2 className='text-red-500 font-bold text-xl mt-8 mb-2'>Director</h2>
        <p className='text-zinc-300 leading-relaxed text-lg'>{movieData.Director}</p>
        </div>
        </div>}
    </div>
  )
}

export default Moviedetails
