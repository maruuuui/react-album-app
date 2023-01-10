import React, { useEffect, useState } from 'react'
import 'pages/App/index.css'

import Layout from 'components/Layout'
import AlbumCards from 'pages/App/AlbumCards'

import { Album } from 'types'
import { getAlbumDataArray } from 'util/albumApi'

function App() {
  // Album自体のデータ
  const [albumDataArray, setAlbumDataArray] = useState<Album[]>([])
  const [shouldFetchAlbumData, setShouldFetchAlbumData] = useState<boolean>(true)

  const setShouldFetchTrue = () => {
    setShouldFetchAlbumData(true)
  }

  const fetchAlbumDataArray = async () => {
    try {
      // バックエンド(lambda)からAlbumを取得する
      const result = await getAlbumDataArray()
      setAlbumDataArray(result)
    } catch (error) {
      console.log(error)
      setAlbumDataArray([])
    }
  }

  // Album削除確認モーダル関係
  const [deletelbumModalIsOpen, setDeleteAlbumModalIsOpen] =
    useState<boolean>(false)
  const [modalContentId, setModalContentId] = useState<string>('')
  const [modalContentTitle, setModalContentTitle] = useState<string>('')

  const openModalFunc = (id: string, title: string) => {
    console.log(`id:${id}, title:${title} の削除確認モーダルを開く`)
    setModalContentId(id)
    setModalContentTitle(title)
    setDeleteAlbumModalIsOpen(true)
  }

  // Album新規作成モーダル関係
  const [createAlbumModalIsOpen, setCreateAlbumModalIsOpen] =
    useState<boolean>(false)

  // ローディング画面関係
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (shouldFetchAlbumData) {
      setShouldFetchAlbumData(false)
      setIsLoading(true)
      fetchAlbumDataArray().then(() => {
        setIsLoading(false)
      })
    }
  }, [shouldFetchAlbumData])

  return (
    <>
      <Layout
        setShouldFetchTrue={setShouldFetchTrue}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        deletelbumModalIsOpen={deletelbumModalIsOpen}
        closeDeleteAlbumModal={()=>{setDeleteAlbumModalIsOpen(false)}}
        modalContentId={modalContentId}
        modalContentTitle={modalContentTitle}
        createAlbumModalIsOpen={createAlbumModalIsOpen}
        setCreateAlbumModalIsOpen={setCreateAlbumModalIsOpen}
        children={
          <AlbumCards
            albumDataArray={albumDataArray}
            openModalFunc={openModalFunc}
          />
        }
      />
    </>
  )
}

export default App
