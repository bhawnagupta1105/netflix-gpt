import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addUpcommingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";



const useUpcommingMovies = () => {
const dispatch = useDispatch();
const upcommingMovies = useSelector((store) => store.movies.upcommingMovies);

const getUpcommingMovies = async () => {
    const data = await fetch( "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    API_OPTIONS,)
    const json = await data.json();
    dispatch(addUpcommingMovies(json.results));
};
//if my popular movies are not there then only make an api call
useEffect(() => {
    !upcommingMovies && getUpcommingMovies();
},[]);
};

export default useUpcommingMovies;