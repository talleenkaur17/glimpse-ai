import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies);
  if(!movies ||  !movies.nowPlayingMovies ) return null ;
 
  
  return (

    <div className='bg-slate-100'>
        <MovieList title={"Popular on GLIMPSE"} movies={movies.nowPlayingMovies.Search}/>
        <MovieList title={"Trending Now"} movies={movies.releaseMovies.Search}/>
        
       


      


       
        
      
    </div>
  )
}

export default SecondaryContainer
