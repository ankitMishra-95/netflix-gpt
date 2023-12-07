import { useSelector } from "react-redux";
import MovieList from './MovieList';

const GptMovieSuggesions = () => {

  const {gptMovies, movieNames} = useSelector(store => store.gpt);
  if(!movieNames) return null;
  console.log(gptMovies[0].results[0]);

  return (
    <div>
      <div className="bg-black text-white p-4 m-4 pb-10 bg-opacity-90">
        {movieNames.map((movieName, index) => <MovieList key={movieName} title={movieName} movies={gptMovies?.[index]?.results} />)}
        
      </div>
    </div>
  )
}

export default GptMovieSuggesions