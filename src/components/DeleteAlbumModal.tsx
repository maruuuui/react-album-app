import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { deleteAlbum } from 'util/albumApi'

type DeleteAlbumModalProps = {
  deletelbumModalIsOpen: boolean
  id: string
  title: string
  closeModal: () => void
  setShouldFetchAlbumData: () => void
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

function DeleteAlbumModal(props: DeleteAlbumModalProps) {
  const complete = async () => {
    props.setIsLoading(true)
    await deleteAlbum(props.id)
    props.setIsLoading(false)

    props.setShouldFetchAlbumData()
    props.closeModal()
  }
  return (
    <Modal show={props.deletelbumModalIsOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>確認</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.title}を削除しますか？</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={complete}>
          削除する
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteAlbumModal
