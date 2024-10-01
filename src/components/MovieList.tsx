import { Spinner } from "@nextui-org/react"
import { Movie } from "../types"
import MovieCard from "./MovieCard"

const MovieList = ({movies = [], loading = false} : {movies: Movie[], loading: boolean}) => {

  return (
    <ul className='movie-list'>
      {
        loading 
        ? <Spinner label="Loading..." color="warning" size='lg' className='loading-spinner' /> 
        : (movies.length === 0 
            ? <h1>No movies found with this title</h1> 
            : movies.map(
              (movie) => <MovieCard key={movie.id} movie={movie} />
            )
        )
      }
    </ul>
  )
}

export default MovieList