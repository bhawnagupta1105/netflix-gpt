import MovieCard from "./MovieCard";
//import { useNavigate } from "react-router-dom";

const MovieList = ({title,movies}) => {
    console.log(movies);
    return (
        <div className="px-6">
            <div>
                <h1 className="text-lg md:text-3xl font-bold py-2 text-white">{title}</h1>
            </div>
        <div className="flex overflow-x-scroll">

            <div className="flex">
            {movies?.map((movie) => <MovieCard key = {movie.id} posterPath={movies.posterPath}/>)}
            </div>
            </div>
        </div>
    );
};
export default MovieList;