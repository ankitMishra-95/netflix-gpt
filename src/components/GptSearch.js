import GptMovieSuggesions from "./GptMovieSuggesions"
import GptSearchBar from "./GptSearchBar"
import {BG_IMAGE_URL} from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10"> 
            <img src={BG_IMAGE_URL} alt="bg" />
        </div>
      <GptSearchBar />
      <GptMovieSuggesions />
    </div>
  )
}

export default GptSearch