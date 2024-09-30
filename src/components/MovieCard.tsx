import { Movie, MovieId, MovieListId } from '../types'
import placeholder from'../assets/no-image.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useMovieListsActions } from '../hooks/useMovieListsActions'
import MovieListsSelectModal from './MovieListsSelectModal'
import { useDisclosure } from '@nextui-org/react'

const MovieCard = ({movie}: {movie: Movie}) => {
  const { title, year, poster } = movie
  const posterImage = poster || placeholder
  const { addMovieToList, removeMovieFromList } = useMovieListsActions()
  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();

  const handleAddMovieToList = (listId: MovieListId) => {
    addMovieToList(movie, listId)
  }

  const handleRemoveMovieFromList = (listId: MovieListId) => {
    removeMovieFromList(movie.id, listId)
  }
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
        <span className='movie-title'>
          <h2>{title}</h2>
          <FontAwesomeIcon icon={faPlus} className='clear-search' onClick={onOpen} /> 

        </span>
        <span className='movie-year'>
          <h2>{year}</h2>
        </span>
      </div>
      <MovieListsSelectModal movieId={movie.id} isOpen={isOpen} onOpenChange={onOpenChange} addMovieToList={handleAddMovieToList} removeMovieFromList={handleRemoveMovieFromList} onClose={onClose} />
    </div>
    
  )
}

export default MovieCard