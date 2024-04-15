import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
 

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* You can add more JSX elements here to display the now playing movies */}
    </div>
  );
};

export default Browse;
