import { IMAGE_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  
  return (
    <div className="w-44">
        <img src={IMAGE_CDN_URL+posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard