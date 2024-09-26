import {Button, useDisclosure} from "@nextui-org/react"
import FormModal from '../components/FormModal'
import { useMovieListsActions } from "../hooks/useMovieListsActions"
import { useAppSelector } from "../hooks/store"
import ListItem from "../components/ListItem"
import { MovieListId } from "../types"
import ListButton from "../components/ListButton"

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
      <div className='movie-list bg-slate-100 '>
        { lists.length > 0 && 
            <ListButton 
              onPress={onOpen} 
              withBorder position="absolute top-1 left-2"
            > 
              Add list +
            </ListButton>
        }
        <ul className='relative pt-10 pb-5 w-full flex flex-col gap-3 justify-center items-center'> 
          {
            lists.length 
            ? lists.map((list) => (
              <ListItem 
                key={list.id} 
                text={list.name} 
                onPressDelete={handleRemoveList}
                listId={list.id} 
              />
            )) 
            :  <ListButton onPress={onOpen} color="primary" position="object-none object-center ">Add list +</ListButton>
          }
        </ul>
      </div>
      <FormModal isOpen={isOpen} onOpenChange={onOpenChange} onAccept={handleNewList} onClose={onClose}/>
    </div>
  )
}

export default MyLists
