import React from 'react';
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestions from './GPTMovieSuggestions';
import background from '../LOGOS/background.jpg';

const GPTSearch = () => {
  return (
    <div className="relative h-screen flex justify-center items-center ">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img src={background} alt="background" className="w-full h-full object-cover" />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
