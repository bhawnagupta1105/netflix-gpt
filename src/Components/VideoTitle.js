import React from "react";
import { useSelector } from "react-redux";
import lang from "../Utils/languageConstants";
//import { useNavigate } from "react-router-dom";

const VideoTitle = ({title,overview}) => {
  const langkey = useSelector((store) => store.config.lang);
  return (
    <div className="w-screen aspect-video pt-[18%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text:2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:my-0">
        <button className="text-black bg-white py-1 md:py-4 px-3 w-10 rounded-lg  text-xl mx-2 hover:bg-opacity-75">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/play--v1.png"
            alt="play--v1"
          />
          {lang[langkey].start}
        </button>
        <button className=  " hidden md:inline-block text-white bg-black hover:bg-opacity-75  p-4 w-10 rounded-lg px-12 text-lg mx-2">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/parakeet-line/48/FFFFFF/info.png"
            alt="info"
          />{" "}
          {lang[langkey].info}
        </button>
      </div>
    </div>
  );
};
export default VideoTitle();
