import { useDispatch } from "react-redux";

import { addNewReleases } from '../utils/moviesSlice';
import { useEffect } from "react";
import { api_key } from "../utils/constants";

 const useNewReleases = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Call getNowPlayingMovies function when component mounts
        getReleases();
    }, []);

    const getReleases = async () => {
        try {
            const response = await fetch(`https://omdbapi.com/?s={love}&apikey=${api_key}`);
            const data = await response.json(); // Parse response as JSON
            console.log(data); // Log the data received from the API
            dispatch(addNewReleases(data));
        } catch (error) {
            console.error('Error fetching now playing movies:', error);
        }
    };

    return getReleases; // Return the function for external use
}


export default useNewReleases;