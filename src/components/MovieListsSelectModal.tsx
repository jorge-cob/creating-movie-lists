import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react"
import { useAppSelector } from "../hooks/store"
import { MovieListId } from "../types"

type formModalProps = {
  isOpen: boolean
  onOpenChange: () => void
  onSelect: (name: string) => void
  onClose: () => void
}

const MovieListsSelectModal = ({isOpen, onOpenChange, onClose, onSelect}: formModalProps) => {
  const lists = useAppSelector((state) => state.movieLists)


  const handleClose = (onClose: () => void) => {
    onClose()
  }

  const handleSelect = (listId: MovieListId) => {
    onSelect(listId)
    handleClose(onClose)
  }

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} >
        <ModalContent>
            
            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
            <ModalBody>
            {
              lists.map((list) => {
                return <Button color="primary" onPress={() => handleSelect(list.id)}>{list.name}</Button>
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