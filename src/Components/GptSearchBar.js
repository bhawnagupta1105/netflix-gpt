import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../Utils/languageConstants";
import openai from "../Utils/openAi";
import { API_OPTIONS } from "../Utils/constants";
import { addGptMovieResult } from "../Utils/gptSlice";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  //search movie
  const dispatch = useDispatch();
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handelgptSearchClick = async () => {
    console.log(searchText.current.vale);
    //Make an api call to Gpt api to get movie Results
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for this query" +
      searchText.current.value +
      ".Only give me names of 5 movies, comma seperated like the example result given ahead . Example Result:Gadar,Sholay,Don,Shaitan,Elemental";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovieList = gptResults.choices?.[0]?.message?.content.split(",");
    //for 5 movie we will find in Tmdb api

    const promiseArray = gptMovieList.map((movie) => searchMovieTmdb(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovieList, movieResultd: tmdbResults })
    );
  };
  return (
    <div className="pt:[30%] md:pt-[10%] flex justify-center">
      <form
        className=" bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="w-full md:w-1/2 p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langkey].gptSearchPlaceHolder}
        ></input>
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handelgptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
