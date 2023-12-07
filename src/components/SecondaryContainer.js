import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)

  return movies && (
    <div className=" bg-black">
      <div className="md:-mt-64 -mt-36 relative z-50">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      {/* <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> */}
      </div>
    </div>
  )
}

export default SecondaryContainer