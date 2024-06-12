import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchPage from "./GptSearchPage";

const GptSearch = () => {
return (
    <div>
        <div className="fixed -z-10"> 
        <img
          className="h-screen object-cover"
          src="https://i.redd.it/zjgs096khv591.jpg"
          alt="background-img1"
        ></img>

        </div>
        <div className="pt-[30%] md:p-0">
        <GptSearchBar/>
        <GptSearchPage/>
        </div>
    </div>
)
}
export default GptSearch;