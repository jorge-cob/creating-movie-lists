import { Movie } from '../types'

const MovieCard = ({movie}: {movie: Movie}) => {
  return (
    <div className='movie-item-container'>
      <img className='movie-image' src={movie.poster} alt={movie.title} />
      <p className='movie-title'>
        <h3>{movie.title}</h3> - {movie.year}
      </p>
    </div>
    
  )
}

export default MovieCard