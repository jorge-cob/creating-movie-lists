import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Checkbox} from "@nextui-org/react"
import { useAppSelector } from "../hooks/store"
import { Movie, MovieId, MovieListId } from "../types"

type formModalProps = {
  movieId: MovieId,
  isOpen: boolean
  onOpenChange: () => void
  addMovieToList: (listId: MovieListId) => void
  removeMovieFromList: (listId: MovieListId) => void
  onClose: () => void
}

const MovieListsSelectModal = ({isOpen, onOpenChange, onClose, movieId, addMovieToList, removeMovieFromList}: formModalProps) => {
  const lists = useAppSelector((state) => state.movieLists)



  const handleClose = (onClose: () => void) => {
    onClose()
  }

  const handleSelect = (listId: MovieListId, isInList: boolean) => {
    isInList ? removeMovieFromList(listId) : addMovieToList(listId)
  }

  const isMovieInList = (movieId: MovieId, listId: MovieListId) => {
    const list = lists.filter((list) => list.id === listId)[0]
    return list.movies.some((movie) => movie.id === movieId)
  }

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} >
        <ModalContent>
            
            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
            <ModalBody>
            {
              lists.map((list) => {
                return (
                  <div key={list.id}>
                    <Checkbox isSelected={isMovieInList(movieId, list.id)} onValueChange={() => handleSelect(list.id, isMovieInList(movieId, list.id))} />
                    <h3>{list.name}</h3>                          
                  </div>
                )
              })

            }  
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={() => handleClose(onClose)}>
                Cancel
              </Button>
      
            </ModalFooter>
          
        </ModalContent>
      </Modal>
    </>
  )
}

export default MovieListsSelectModal