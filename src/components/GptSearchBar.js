import { useDispatch, useSelector } from "react-redux"
import { lang } from "../utils/languageConstants"
import { useRef } from "react";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const currLang = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchMovieInTMDB = async (movie) => {
      const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
      const response = data.json();
      return response;
    }

    const handleGptSearchClick = async () => {
      
      const query = "Act as a movie recommendation system and suggest some movies for the query: "+ searchText.current.value + ". Only give me the names of 5 movies separated by commas like the example results ahead. Example Result: Gadar, Sholay, Don, Golmal, Dhamaal";

        // const gptResults = await openai.chat.completions.create({
        //   messages: [{ role: 'user', content: query }],
        //   model: 'gpt-3.5-turbo',
        // });

        // console.log(gptResults.choices);
        const result = "Stree, Bhool Bhulaiyaa, Go Goa Gone, Roohi, Stree 2".split(", ");

        const promiseArray = result.map(movie => searchMovieInTMDB(movie)) // This will return us a array of promises
        const tmdbResults = await Promise.all(promiseArray);
        dispatch(addGptMovieResult({movieResults: tmdbResults, movieNames: result }));
    }
   
  return (
    <div className="flex justify-center pt-[7%]">
        <form className="bg-black w-1/2 py-8 px-5 flex justify-center items-center bg-opacity-80 rounded" onSubmit={(e) => e.preventDefault()}>
            <input type="text" className="py-4 px-4 w-9/12 mr-[1%] rounded" ref={searchText} placeholder={lang[currLang]?.gptPlaceholderText} />
            <button className="py-4 px-4 bg-red-600 text-white rounded  w-2/12" onClick={handleGptSearchClick}>{lang[currLang]?.search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar