import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const movieTrailer = useSelector(store => store.movies.trailer);
    

    const getMovieVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const response = await data.json();
        const filterData = response.results.filter((videoElem) => videoElem.type === 'Trailer');
        const trailer = filterData.length ? filterData[0] : response.results[0];
        // console.log(trailer);
        dispatch(addTrailer(trailer))
    }

    useEffect(() => {
        !movieTrailer && getMovieVideo();
    }, [])
}

export default useMovieTrailer