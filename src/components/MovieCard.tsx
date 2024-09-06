import { Movie } from '../types'
import placeholder from'../assets/no-image.jpg'
import { Image } from '@nextui-org/react'

const MovieCard = ({movie}: {movie: Movie}) => {
  const { title, year, poster } = movie
  const posterImage = poster || placeholder
  return (
    <div className='movie-item-container'>
      <Image 
        className='movie-image'
        src={posterImage}
        alt={title}
      />
      <p className='movie-title'>
        {title} - {year}
      </p>
    </div>
    
  )
}

export default MovieCard