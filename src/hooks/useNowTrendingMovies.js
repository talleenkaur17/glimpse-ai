import { useDispatch } from "react-redux";
import { addTrendingMovies } from '../utils/moviesSlice';
import { useEffect } from "react";
import { api_key } from "../utils/constants";

const useNowTrendingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Call getNowTrendingMovies function when component mounts
    getNowTrendingMovies();
  }, []);

  const getNowTrendingMovies = async () => {
    try {
      const response = await fetch(`https://omdbapi.com/?s={action}&genre={horror}&apikey=${api_key}`);
      const data = await response.json(); // Parse response as JSON
      console.log(data); // Log the data ree data received from the API
      if (dispatch) {
        dispatch(addTrendingMovies(data));
      }// Dispatch action with data
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    }
  };

  return getNowTrendingMovies; // Return the function for external use
};

export default useNowTrendingMovies; 