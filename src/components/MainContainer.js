import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if (!movies) return null; // Return null when movies are not available
    
    const mainMovies = movies.Search[3]; // Assuming you only want the first movie
    console.log(mainMovies);
    if(!mainMovies)return null;
    const { Title: title, Plot: description } = mainMovies; // Destructure Title and Plot from mainMovies
    return (
        <div>
            <VideoTitle title={title} overview={description}/>
            <VideoBackground/>
        </div>
    );
}

export default MainContainer;
