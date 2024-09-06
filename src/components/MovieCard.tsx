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
      <div className='movie-card-text'>
        <span style={{
          backgroundColor: '#EDEBEC',
          padding: '5px 10px',
          fontWeight: 'bold'
        }}>
          <h2>{year}</h2>
        </span>
        <span style={{
          padding: '5px 10px'
        }}>
          <h2>{title}</h2>
        </span>
      </div>
    </div>
    
  )
}

export default MovieCard