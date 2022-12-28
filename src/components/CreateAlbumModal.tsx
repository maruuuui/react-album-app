import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import FileInputComponent from "react-file-input-previews-base64";

import { createAlbum } from 'util/albumApi'

type CreateAlbumModalProps = {
  modalIsOpen: boolean
  closeModal: () => void
  setShouldFetchAlbumData: () => void
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

function CreateAlbumModal(props: CreateAlbumModalProps) {
  const [title, setTitle] = useState<string>('')
  const [memo, setMemo] = useState<string>('')
  
  const [imageFileName, setImageFileName] = React.useState("");
  const [base64Image, setBase64Image] = React.useState("");
  const [imageContentType, setImageContentType] = React.useState("");


  const post = async () => {
    console.log('Album追加ボタンが押下されたよ')
    var forms = document.querySelectorAll('.needs-validation')

    // バリデーションが通ったらPOSTして、Album新規作成モーダルを閉じる
    let validated = true
    Array.prototype.slice.call(forms).forEach(function (form) {
      if (!form.checkValidity()) {
        validated = false
      }

      form.classList.add('was-validated')
    })

    if (validated) {
      props.setIsLoading(true)
      await createAlbum(title, memo, base64Image, imageContentType)
      props.setIsLoading(false)

      props.setShouldFetchAlbumData()
      props.closeModal()
    }
  }
  return (
    <Modal show={props.modalIsOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Album追加フォーム</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="needs-validation" noValidate>
          <Form.Group className="title mb-3">
            <Form.Label>タイトル</Form.Label>
            <Form.Control
              type="text"
              id="titleInput"
              onChange={(event) => {
                setTitle(event.currentTarget.value)
              }}
              required
            />
            <Form.Control.Feedback type="invalid">
              この項目は必須です。
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="memo mb-3">
            <Form.Label>備考</Form.Label>
            <Form.Control
              as="textarea"
              id="memoTextarea"
              onChange={(event) => {
                setMemo(event.currentTarget.value)
              }}
            />
          </Form.Group>
          <FileInputComponent
        multiple={false}
        labelStyle={{ display: "none" }}
        callbackFunction={(file: { name: string;type:string; base64: string; }) => {
          console.log(file);
          setImageFileName(file.name);
          setImageContentType(file.type);
          setBase64Image(file.base64);
          
        }}
        imagePreview={true}
        buttonComponent={
          //クリック時に選択ダイアログを開くコンポーネント
          <Button variant="secondary">
          アップロード画像選択
        </Button>
        }
        accept="image/*"
      />

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={post}>
          Album追加
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateAlbumModal
