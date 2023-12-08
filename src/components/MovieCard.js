import { IMAGE_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-24 h-44 md:h-auto md:w-44">
        <img src={IMAGE_CDN_URL+posterPath} className="h-full " alt="Movie Card" />
    </div>
  )
}

export default MovieCard