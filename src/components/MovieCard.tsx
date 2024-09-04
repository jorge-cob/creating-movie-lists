import { Movie } from '../types'

const MovieCard = ({movie}: {movie: Movie}) => {
  return (
    <li className='movie-card'>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title} - {movie.Year}</h3>
    </li>
  )
}

export default MovieCard