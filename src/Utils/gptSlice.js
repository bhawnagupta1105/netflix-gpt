import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch:false
    },
    reducers:{
        toggleGptSearchView : (state) => {
            state.showGptSearch = !state.showGptSearch;
        },addGptMovieResult:(state,action) => {
            state.gptMovies = action.payload;
        }
    },
});
export const {toggleGptSearchView} =gptSlice.actions;
export default gptSlice.reducer;