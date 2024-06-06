import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Utils/movieSlice";
const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideo = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/" +
      movieId +
      "/videos?language=en-US", API_OPTIONS);
      const json = await data.json();
      console.log(json);
  
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0]; //Hardcoding it as if we get multiple trailer of that movie then it returns us the first movie trailer that is occuring in it
      console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
      getMovieVideo();
    }, []);
}

export default useMovieTrailer;