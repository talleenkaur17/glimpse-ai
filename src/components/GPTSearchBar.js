import React from 'react';
import lang from './LanguageConstants';
import { useSelector } from 'react-redux';

const GPTSearchBar = () => {
    const langKey=useSelector((store)=>store.config.lang);
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex items-center p-10 bg-gray-100 rounded-lg">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="rounded-l-lg py-2 px-4 w-96 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-r-lg bg-blue-500 text-white font-bold border-blue-500 border-t border-b border-r"
        >
        {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
