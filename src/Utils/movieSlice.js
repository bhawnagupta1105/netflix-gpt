import {createSlice} from "@reduxjs/toolkit"
const movieSlice = createSlice(
    {name: "movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        upcommingMovies:null,
    },
    reducers: {
        addNowPlayingMovies:(state,action) => {
            state.nowPlayingMovies = action.payload;

        },
        addTrailerVideo:(state,action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies:(state,action) => {
            state.popularMovies = action.payload;
        },
        addUpcommingMovies:(state,action) => {
            state.upcommingMovies = action.payload;
        }
    }
}
)

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addUpcommingMovies} =movieSlice.actions;
export default movieSlice.reducer;