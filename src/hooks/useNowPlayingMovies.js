import { useDispatch } from "react-redux";
import { url, options } from '../utils/constants';
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
            const response = await fetch(url, options);
            const data = await response.json(); // Parse response as JSON
            console.log(data); // Log the data received from the API
            dispatch(addNowPlayingMovies(data));
        } catch (error) {
            console.error('Error fetching now playing movies:', error);
        }
    };

    return getNowPlayingMovies; // Return the function for external use
}
export default useNowPlayingMovies;

