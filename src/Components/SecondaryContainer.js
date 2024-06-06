import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const SecondaryContainer = () => {

    const movies = useSelector((store) => store.movies);
    return (
        movies && 
        <div className="bg-black">
            <div className="-mt-50 relative z-100">
            <MovieList title = {"Now Playing"} movies= {movies.nowPlayingMovies}/>
            <MovieList title = {"Trending"} movies= {movies.popularMovies}/>
            <MovieList title = {"Popular"} movies= {movies.nowPlayingMovies}/>
            <MovieList title = {"Upcomming Movies"} movies= {movies.nowPlayingMovies}/>
            <MovieList title = {"Horror"} movies= {movies.nowPlayingMovies}/>
            <MovieList title = {"Sci-fi"} movies= {movies.nowPlayingMovies}/>
            </div>
{/* Movie List-Popular
Movie List - Now Playing 
Movie List - Trending
Movie List - Horror */}
        </div>
    )
}

export default SecondaryContainer;