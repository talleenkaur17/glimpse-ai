import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowTrendingMovies from '../hooks/useNowTrendingMovies';
import useNewReleases from '../hooks/useNewReleases';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGPTSearch=useSelector(store=>store.gpt.showGPTSearch);
  useNowPlayingMovies();
  
  useNewReleases();
  //useNowTrendingMovies();
 

  return (
    <div>
      <Header />
      {
        showGPTSearch?(<GPTSearch/>):(<><MainContainer/>
        <SecondaryContainer/></>)
      }
   
      
     
      {/*   You can add more JSX elements here to display the now playing movies */}
    </div>
  );
};

export default Browse;
