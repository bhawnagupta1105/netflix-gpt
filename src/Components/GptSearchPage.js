import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
//import { useNavigate } from "react-router-dom";

const GptSearchPage = () => {
    const {movieResults,movieNames} = useSelector((store) => store.gpt);
    if(!movieNames)return null;
    return(
        <div className="p-4 m-4 bg-black text-white">
            <div>
                <h1>{movieNames[0]}</h1>
                {movieNames.map((movieName,index) => <MovieList key = {movieName} title = {movieName} movies={movieResults[index]}/>)}
            </div>
        </div>
    )

}
export default GptSearchPage;