import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchPage from "./GptSearchPage";

const GptSearch = () => {
return (
    <div>
        <div className="absolute -z-10"> 
        <img
          className=" w-full"
          src="https://i.redd.it/zjgs096khv591.jpg"
          alt="background-img1"
        ></img>

        </div>
        <GptSearchBar/>
        <GptSearchPage/>
    </div>
)
}
export default GptSearch;