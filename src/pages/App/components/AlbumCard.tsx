import React from 'react'
import { Button, Card } from 'react-bootstrap'

import 'pages/App/components/AlbumCard.css'

type AlbumCardProps = {
  id: string
  title: string
  createdAt: string
  memo: string
  imagePath: string
  openModalFunc: (id: string, title: string) => void
}

function AlbumCard(props: AlbumCardProps) {
  return (
    <Card>
      <Card.Body>
        <Card.Img variant="top" src={props.imagePath} />

        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          登録日時:{props.createdAt}
        </Card.Subtitle>
        <Card.Text>{props.memo}</Card.Text>
        {/* Album削除確認モーダル(#askDeleteAlbumModal)を表示するボタン */}
        <Button
          variant="primary"
          onClick={() => {
            props.openModalFunc(props.id, props.title)
          }}
        >
          削除する
        </Button>
      </Card.Body>
    </Card>
  )
}

export default AlbumCard
