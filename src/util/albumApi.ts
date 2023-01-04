import axios from 'axios'
import { Album } from 'types'

// デプロイ時にはawsのurlに差し替える
const url =
  typeof process.env.REACT_APP_BACKEND_HOST == 'string'
    ? process.env.REACT_APP_BACKEND_HOST
    : 'http://localhost:8000'
const requestHeader = {
  'Content-Type': 'application/json',
}

export async function getAlbumDataArray() {
  try {
    const res = await axios.get<Album[]>(url)
    if (res.status !== 200) {
      throw Error('Albumの取得に失敗しました')
    }

    const items = res.data
    // for (const item of items) {
    //     console.log(`id:${item.id}`)
    // }
    return items
  } catch (err) {
    console.log(err)
    throw Error('Albumの取得に失敗しました')
  }
}

export async function createAlbum(
  title: string,
  memo: string,
  base64Image: string,
  contentType: string,
  fileName:string
) {
  console.log(`createAlbum title:${title},memo:${memo},fileName:${fileName},base64Image:${base64Image}`)
  try {
    const res = await axios.post(
      url,
      {
        title,
        memo,
        image: base64Image,
        type: contentType,
        file_name: fileName,
      },
      { headers: requestHeader },
    )
    if (res.status !== 200) {
      throw Error('Albumの作成に失敗しました')
    }

    return res
  } catch (err) {
    console.log(err)
    throw Error('Albumの作成に失敗しました')
  }
}

export async function deleteAlbum(id: string) {
  console.log(`deleteAlbum id:${id}`)
  try {
    const res = await axios.delete(`${url}/${id}`, { headers: requestHeader })
    if (res.status !== 200) {
      throw Error('Albumの削除に失敗しました')
    }

    return res
  } catch (err) {
    console.log(err)
    throw Error('Albumの削除に失敗しました')
  }
}
