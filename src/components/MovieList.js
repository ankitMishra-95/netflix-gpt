import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
    
  return (
    <div className="px-8 pt-8">
        <h1 className="text-3xl py-4 text-white">{title}</h1>
       <div className="flex overflow-x-scroll gap-2">
       <div className="flex gap-3">
        {movies?.map((movie => {
            return <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
        }))}
        </div>
       </div>
    </div>
  )
}

export default MovieList