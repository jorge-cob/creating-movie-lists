import { Movie } from '../types'
import placeholder from'../assets/no-image.jpg'

const MovieCard = ({movie}: {movie: Movie}) => {
  const { title, year, poster } = movie
  const posterImage = poster || placeholder
  return (
    <div className='movie-item-container'>
      <div className='movie-image-wrapper'>
        <img 
          className='movie-image'
          src={posterImage}
          alt={title}
        />
      </div>
      <div className='movie-title'>
        <h2>{title} </h2> 
        <h3>{year} </h3> 
      </div>
    </div>
    
  )
}

export default MovieCard