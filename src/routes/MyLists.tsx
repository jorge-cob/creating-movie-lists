import {Button, useDisclosure} from "@nextui-org/react";
import FormModal from '../components/FormModal'
import { useMovieListsActions } from "../hooks/useMovieListsActions";
import { useAppSelector } from "../hooks/store";

function MyLists() {
  const { addNewList } = useMovieListsActions()
  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
  const lists = useAppSelector((state) => state.movieLists)

  const handleNewList = (name: string) => {
    addNewList(name)
  }

  return (
    <div className="movie-list-container">
      <ul className='movie-list'>
        {lists.length 
          ? lists.map((list) => (
            <li key={list.name}>{list.name}</li>
          )) 
          : <h1>You have no lists</h1>}
      </ul>
      <Button onPress={onOpen}>Create new list</Button>
      <FormModal isOpen={isOpen} onOpenChange={onOpenChange} onAccept={handleNewList} onClose={onClose}/>
    </div>
  )
}

export default MyLists
