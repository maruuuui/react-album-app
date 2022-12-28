import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

type HeaderProps = {
  openModal: () => void
  setShouldFetchAlbumData: () => void
}
function Header(props: HeaderProps) {
  const path = window.location.pathname
  return (
    <Navbar bg="light">
      <Container fluid>
        <Navbar.Brand className="mb-0">Albumアプリ</Navbar.Brand>
        <Nav.Item>
          <Button variant="success" onClick={props.openModal}>
            新規作成
          </Button>
        </Nav.Item>
      </Container>
    </Navbar>
  )
}

export default Header
