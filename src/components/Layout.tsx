import React, { ReactNode } from 'react'

import Header from 'components/Header'
import DeleteAlbumModal from 'components/DeleteAlbumModal'
import CreateAlbumModal from 'components/CreateAlbumModal'
import LoadingModal from 'components/LoadingModal'

type LayoutProps = {
  children: ReactNode

  setShouldFetchTrue: () => void

  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>

  deletelbumModalIsOpen: boolean
  // setDeleteAlbumModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  closeDeleteAlbumModal: () => void

  modalContentId: string
  modalContentTitle: string

  createAlbumModalIsOpen: boolean
  setCreateAlbumModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Header
        setShouldFetchAlbumData={props.setShouldFetchTrue}
        openModal={() => {
          props.setCreateAlbumModalIsOpen(true)
        }}
      />
      {props.children}

      <DeleteAlbumModal
        deletelbumModalIsOpen={props.deletelbumModalIsOpen}
        id={props.modalContentId}
        title={props.modalContentTitle}
        closeModal={props.closeDeleteAlbumModal}
        setShouldFetchAlbumData={props.setShouldFetchTrue}
        setIsLoading={props.setIsLoading}
      />
      <CreateAlbumModal
        modalIsOpen={props.createAlbumModalIsOpen}
        closeModal={() => {
          props.setCreateAlbumModalIsOpen(false)
        }}
        setShouldFetchAlbumData={props.setShouldFetchTrue}
        setIsLoading={props.setIsLoading}
      />
      <LoadingModal isLoading={props.isLoading} />
    </>
  )
}

export default Layout
