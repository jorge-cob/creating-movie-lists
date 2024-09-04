import { Movie } from '../types'

const MovieCard = ({movie}: {movie: Movie}) => {
  return (
    <li className='movie-card'>
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title} - {movie.year}</h3>
    </li>
  )
}

export default MovieCard