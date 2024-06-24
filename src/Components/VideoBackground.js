import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import React from "react";

//import { useNavigate } from "react-router-dom";

const VideoBackground = ({ movieId }) => {
  //fetch trailer video and updating the store with trailer Video Data
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);


  return (
    <div className="w-screen">
      <iframe
        className="aspect-video w-screen"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&rel=0&controls=0&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
export default VideoBackground();