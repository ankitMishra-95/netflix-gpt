import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {
  useMovieTrailer(movieId)
  const trailerVideo = useSelector(store => store?.movies?.trailer);

  return (
    <div>
      <iframe className="h-screen scale-150 md:w-screen aspect-video md:scale-125" src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBackground