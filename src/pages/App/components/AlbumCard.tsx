import React from 'react'
import { Button, Card } from 'react-bootstrap'

import 'pages/App/components/AlbumCard.css'

type AlbumCardProps = {
  id: string
  title: string
  deadline: string
  memo: string
  openModalFunc: (id: string, title: string) => void
}

function AlbumCard(props: AlbumCardProps) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          期限:{props.deadline}
        </Card.Subtitle>
        <Card.Text>{props.memo}</Card.Text>
        {/* Album完了確認モーダル(#askDeleteAlbumModal)を表示するボタン */}
        <Button
          variant="primary"
          onClick={() => {
            props.openModalFunc(props.id, props.title)
          }}
        >
          完了！
        </Button>
      </Card.Body>
    </Card>
  )
}

export default AlbumCard
