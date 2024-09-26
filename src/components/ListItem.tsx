import { Card, CardBody } from "@nextui-org/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { MovieListId } from "../types"

const ListItem = ({text, onPressDelete, listId}: {text: string, onPressDelete: (listId: MovieListId) => void, listId: MovieListId}) => {
  return (
    <Card>
      <CardBody>
        {text}
      </CardBody>
      <FontAwesomeIcon icon={faXmark} className='clear-search' onClick={() => onPressDelete(listId)} /> 
    </Card>
  )
}

export default ListItem