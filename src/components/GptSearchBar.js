import { useSelector } from "react-redux"
import { lang } from "../utils/languageConstants"

const GptSearchBar = () => {
    const currLang = useSelector(store => store.config.lang)
   
  return (
    <div className="flex justify-center pt-[7%]">
        <form className="bg-black w-1/2 py-8 px-5 flex justify-center items-center bg-opacity-80 rounded">
            <input type="text" className="py-4 px-4 w-9/12 mr-[1%] rounded"  placeholder={lang[currLang]?.gptPlaceholderText} />
            <button className="py-4 px-4 bg-red-600 text-white rounded  w-2/12">{lang[currLang]?.search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar