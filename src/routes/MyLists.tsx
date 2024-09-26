import {Button, useDisclosure} from "@nextui-org/react"
import FormModal from '../components/FormModal'
import { useMovieListsActions } from "../hooks/useMovieListsActions"
import { useAppSelector } from "../hooks/store"
import ListItem from "../components/ListItem"
import { MovieListId } from "../types"

function MyLists() {
  const { addNewList, removeList } = useMovieListsActions()
  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
  const lists = useAppSelector((state) => state.movieLists)

  const handleNewList = (name: string) => {
    addNewList(name)
  }

  const handleRemoveList = (listId: MovieListId) => {
    removeList(listId)
  }

  return (
    <div className="movie-list-container">
      <ul className='movie-list'>
      <Button onPress={onOpen}>Create new list</Button>
        {lists.length 
          ? lists.map((list) => (
            <ListItem 
              key={list.id} 
              text={list.name} 
              onPressDelete={handleRemoveList}
              listId={list.id} 
            />
          )) 
          : <h1>You have no lists</h1>}
      </ul>
      <FormModal isOpen={isOpen} onOpenChange={onOpenChange} onAccept={handleNewList} onClose={onClose}/>
    </div>
  )
}

export default MyLists
