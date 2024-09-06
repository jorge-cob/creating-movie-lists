import { Movie } from "../types"
import MovieCard from "./MovieCard"

const MovieList = ({movies = []} : {movies: Movie[]}) => {
  return (
    <>
      <ul className='movie-list'>
        {
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        }
      </ul>
    </>
  )
}

export default MovieList