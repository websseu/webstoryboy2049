import { cwd } from 'process'
import { connectToDatabase } from '.'
import { loadEnvConfig } from '@next/env'

import User from './model/user.model'
import Post from './model/post.model'
import inputData from '../input'

loadEnvConfig(cwd())

const main = async () => {
  try {
    const { users, posts } = inputData
    await connectToDatabase(process.env.MONGODB_URI)

    // ✅ User 중복 없이 추가 (이메일 기준)
    for (const user of users) {
      const exists = await User.findOne({ email: user.email })
      if (!exists) {
        await User.create(user)
      }
    }

    // ✅ Post 중복 없이 추가 (slug 기준)
    for (const post of posts) {
      const exists = await Post.findOne({ slug: post.slug })
      if (!exists) {
        await Post.create(post)
      }
    }

    console.log('✅ 데이터 입력이 완료되었습니다.')
    process.exit(0)
  } catch (error) {
    console.error('❌ 데이터 입력 실패:', error)
    process.exit(1)
  }
}

main()
