import { cwd } from 'process'
import { connectToDatabase } from '.'
import { loadEnvConfig } from '@next/env'
import inputData from '../input'
import User from './model/user.model'
import Post from './model/post.model'

loadEnvConfig(cwd())

const main = async () => {
  try {
    const { users, posts } = inputData
    await connectToDatabase(process.env.MONGODB_URI)

    await User.deleteMany()
    const createdUsers = await User.insertMany(users)

    await Post.deleteMany()
    const createdPosts = await Post.insertMany(posts)

    console.log({
      createdUsers,
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
