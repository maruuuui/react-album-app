import { Container, Row, Col } from 'react-bootstrap'
import AlbumCard from 'pages/App/components/AlbumCard'
import { Album } from 'types'

type AlbumCardsProps = {
  albumDataArray: Album[]
  openModalFunc: (id: string, title: string) => void
}

function AlbumCards(props: AlbumCardsProps) {
  return (
    <>
      <Container fluid>
        <Row>
          {props.albumDataArray.map((albumData, i) => {
            return (
              <Col xs={12} md={4} lg={3} key={i}>
                <AlbumCard
                  id={albumData.id}
                  title={albumData.title}
                  createdAt={albumData.createdAt}
                  memo={albumData.memo}
                  imagePath={albumData.imagePath}
                  openModalFunc={props.openModalFunc}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default AlbumCards
