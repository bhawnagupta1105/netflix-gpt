import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const SecondaryContainer = () => {

    const movies = useSelector((store) => store.movies);
    return (
        movies && 
        <div className="bg-black">
            <div className="mt-0 md:-mt-50 pl-4 md:pl-12 relative z-100">
            <MovieList title = {"Now Playing"} movies= {movies.nowPlayingMovies}/>
            <MovieList title = {"Popular"} movies= {movies.popularMovies}/>
            <MovieList title = {"Upcomming Movies"} movies= {movies.upcommingMovies}/>
            <MovieList title = {"Popular"} movies= {movies.nowPlayingMovies}/>
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