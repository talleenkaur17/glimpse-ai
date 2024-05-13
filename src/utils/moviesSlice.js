import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trendingMovies: null,
    releaseMovies:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addNewReleases:(state,action)=>{
        state.releaseMovies=action.payload;
    },
  }
});

export const { addNowPlayingMovies, addTrendingMovies,addNewReleases } = movieSlice.actions;
export default movieSlice.reducer;