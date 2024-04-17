import { useEffect } from "react";
import  {API_OPTIONS} from "../Utils/constants"
import Header from "./Header";
import {useDispatch} from "react-redux";
import { addNowPlayingMovies } from "../Utils/movieSlice";
const Browse = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch("api from tmdb api",API_OPTIONS);
        const json = await data.json();
        console.log();
        dispatch(addNowPlayingMovies(json.results));
    };
    useEffect(() => {
getNowPlayingMovies();
    }, []);
    return (
        <div>
            <Header/>


        </div>
    )
};

export default Browse;