import React from 'react';
import MovieCards from './MovieCards';

const MovieList = ({ title, movies }) => {
  console.log(movies,"HII");
    if(!movies)return;
    
  return (
    <div>
        <h1 className='font-bold p-3 text-3xl'>{title}</h1>

    <div className='flex overflow-x-scroll'>
      
      <div className='flex '>
        {movies.map((movie, index) => (
          
          <MovieCards key={index} big_image={movie.Poster} />
          
        ))}
      </div>
    </div>
    </div>
  );
};

export default MovieList;
