import { cwd } from 'process'

import { loadEnvConfig } from '@next/env'
import { busanPostsData } from '../data/busan-posts'
import { busanStoresData } from '../data/busan-stores'
import { connectToDatabase } from '../db'
import Post from '../db/model/post.model'
import Store from '../db/model/store.model'

loadEnvConfig(cwd())

const main = async () => {
  try {
    const busanPost = busanPostsData
    const busanStore = busanStoresData.item

    await connectToDatabase(process.env.MONGODB_URI)

    await Post.deleteMany()
    const createdPosts = await Post.insertMany(busanPost)

    await Store.deleteMany()
    const createdStore = await Store.insertMany(busanStore)

    console.log({
      createdStore,
      createdPosts,
      message: '데이터 입력이 완료되었습니다.',
    })
    process.exit(0)
  } catch (error) {
    console.error(error)
    throw new Error('데이터 입력이 실패하였습니다.')
  }
}

main()
