import GptMovieSuggesions from "./GptMovieSuggesions"
import GptSearchBar from "./GptSearchBar"
import {BG_IMAGE_URL} from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10"> 
            <img src={BG_IMAGE_URL} className="h-screen md:h-auto object-cover" alt="bg" />
        </div>
      <GptSearchBar />
      <GptMovieSuggesions />
    </div>
  )
}

export default GptSearch