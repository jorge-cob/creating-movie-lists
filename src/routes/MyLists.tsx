import { useState } from "react";
import {Button, useDisclosure} from "@nextui-org/react";
import FormModal from '../components/FormModal'
import { MovieList } from "../types";

function MyLists() {
  const [lists, setLists] = useState<MovieList[]>([]);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();


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
      <FormModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  )
}

export default MyLists
