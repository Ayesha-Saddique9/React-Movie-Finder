import React, { useState } from 'react'
import {Link} from 'react-router-dom'
function Home() {
  const [searchName,setsearchName] = useState('');
  const [movie,setMovie] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);

 async function fetchMovie(){
     setLoading(true)
     setError(null);
    const response =await fetch(`https://www.omdbapi.com/?s=${searchName}&apikey=fe2a0cf`);
    const data =await response.json();
    if(data.Response === 'True'){
    console.log(data);
    setMovie(data.Search)
    setLoading(false)
    }
    else{
      setError(true);
      setMovie([]);
      setLoading(false)
    }
  }
  return (
    <div>
       <div className='flex justify-center mt-12 px-4'>
    <div className='flex w-full max-w-lg shadow-lg'>
    <input type="text" name="" id=""
    className='bg-zinc-800 text-white w-full max-w-lg p-4 rounded-l-full outline-none focus:bg-zinc-700 placeholder-zinc-500 transition-colors'
    placeholder='Enter Movie Name' onChange={(e)=>setsearchName(e.target.value)}/>
    <button className='bg-red-600 hover:bg-red-700 rounded-r-full px-8 py-4 text-white font-bold transition-all' onClick={fetchMovie}>Search</button>
  </div>
  </div>

{loading &&<h2 className='text-white text-center mt-10 text-2xl'>Loading...</h2>}
{
  movie && movie.length>0  && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10 ml-10 mt-10'>
    {movie.map((m)=>(
      <Link to={'/movie/' + m.imdbID}><div className='bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 w-2xs mb-10'>
      <img src={m.Poster} alt="" className='w-fll h-80 object-cover w-full' onError={(e)=> e.target.src= 'https://png.pngtree.com/png-vector/20221125/ourlarge/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg'}/>
      <div className='p-4'>
        <h3 className='text-white font-bold text-lg'>{m.Title}</h3>
        <p className='text-zinc-400 mt-1'>{m.Year}</p>
      </div>
     </div></Link>
))
}
 </div>
}


 {error && <h2 className='text-red-600 text-center mt-10 text-2xl font-bold'>Movie not found!</h2>}
    </div>
  )
}

export default Home
