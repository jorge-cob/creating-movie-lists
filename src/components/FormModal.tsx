import { useState } from "react"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input} from "@nextui-org/react"


const FormModal = ({isOpen, onOpenChange}: {isOpen: boolean, onOpenChange: () => void}) => {
  const [listName, setListName] = useState('')


  const handleListNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setListName(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setListName('')
  }

  const handleClose = (onClose: () => void) => {
    setListName('')
    onClose()
  }

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} >
        <ModalContent>
          {(onClose) => (
            <>
              <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                <ModalBody>
                  <Input
                    type="text" 
                    value={listName} 
                    onChange={handleListNameChange}
                    onKeyDown={(e) => e.key === "Enter" ?? handleSubmit}  
                    required
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={() => handleClose(onClose)}>
                    Cancel
                  </Button>
                  <Button color="primary" type="submit">
                    Create
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default FormModal