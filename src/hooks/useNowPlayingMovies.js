import { useDispatch } from "react-redux";
import { api_key } from "../utils/constants";
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Call getNowPlayingMovies function when component mounts
        getNowPlayingMovies();
    }, []);

    const getNowPlayingMovies = async () => {
        try {
            const response = await fetch(`https://omdbapi.com/?s={dog}&genre={horror}&apikey=${api_key}`);
            const data = await response.json(); // Parse response as JSON
            console.log(data); // Log the data received from the API
            if(dispatch){
                dispatch(addNowPlayingMovies(data));
            }
         
        } catch (error) {
            console.error('Error fetching now playing movies:', error);
        }
    };

    return getNowPlayingMovies; // Return the function for external use
}

export default useNowPlayingMovies;
