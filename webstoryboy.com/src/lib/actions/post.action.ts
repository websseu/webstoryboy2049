'use server'

import { revalidatePath } from 'next/cache'
import { connectToDatabase } from '../db'
import { IPostInput } from '../types'
import { PostInputSchema } from '../validator'
import Post, { IPost } from '../db/model/post.model'
import { auth } from '@/auth'

// createPost : 글 작성하기
// updatePost : 글 업데이트 하기
// deletePost : 해당 글 삭제
// getAllPostsPages : 모든 글 가져오기(페이지)
// getPostById : 해당 ID 글 가져오기
// getPostBySlug : 해당 slug 글 가져오기
// getPostsBySubCategory : 서브카테고리 기준으로 글 가져오기(제목, 슬로그, ID)
// getPostsForSubCategory : 서브카테고리 기준으로 글 가져오기

// increasePostViews : 조회수
// likePost : 좋아요

// 글 쓰기
export async function createPost(data: IPostInput) {
  try {
    const post = PostInputSchema.parse(data)
    await connectToDatabase()
    await Post.create(post)

    revalidatePath('/admin/posts')

    return {
      success: true,
    }
  } catch (error) {
    return {
      success: false,
      error: JSON.stringify(error),
    }
  }
}

// 글 업데이트 하기
export async function updatePost(postId: string, data: IPostInput) {
  try {
    const updateData = PostInputSchema.parse(data)

    await connectToDatabase()
    await Post.findByIdAndUpdate(postId, updateData, { new: true })

    revalidatePath('/admin/posts')

    return {
      success: true,
      message: '글이 성공적으로 수정되었습니다!',
    }
  } catch (error) {
    return {
      success: false,
      error: JSON.stringify(error),
    }
  }
}

// 해당 글 삭제
export async function deletePost(postId: string) {
  try {
    await connectToDatabase()
    const result = await Post.findByIdAndDelete(postId)

    if (!result) {
      throw new Error('글이 존재하지 않습니다.')
    }

    return {
      success: true,
    }
  } catch (error) {
    console.error('글 삭제 오류:', error)
    return {
      success: false,
      error: JSON.stringify(error),
    }
  }
}

// 모든 글 가져오기(페이지)
export async function getAllPostsPages({
  page = 1,
  limit = 10,
}: {
  page?: number
  limit?: number
}) {
  try {
    await connectToDatabase()

    const totalPosts = await Post.countDocuments()
    const skip = (Number(page) - 1) * limit
    const posts = await Post.find()
      .sort({ createdAt: 1 })
      .skip(skip)
      .limit(limit)
      .lean()

    return {
      success: true,
      posts,
      totalPosts,
      totalPages: Math.ceil(totalPosts / limit),
      currentPage: page,
    }
  } catch (error) {
    return {
      success: false,
      error: JSON.stringify(error),
    }
  }
}

// 해당 ID 글 가져오기
export async function getPostById(postId: string) {
  try {
    await connectToDatabase()

    const post = await Post.findById(postId).lean<IPost>()

    if (!post) {
      return {
        success: false,
        message: '해당 글을 찾을 수 없습니다.',
      }
    }

    return {
      success: true,
      post,
    }
  } catch (error) {
    return {
      success: false,
      error: JSON.stringify(error),
    }
  }
}

// 해당 slug 글 가져오기
export async function getPostBySlug(slug: string) {
  try {
    await connectToDatabase()
    const post = await Post.findOne({ slug }).lean<IPost>()

    if (!post) {
      return {
        success: false,
        message: '해당 글을 찾을 수 없습니다.',
      }
    }

    return {
      success: true,
      post,
    }
  } catch (error) {
    return {
      success: false,
      error: JSON.stringify(error),
    }
  }
}

// 서브카테고리 기준으로 해당 글 가져오기
export async function getPostsBySubCategory(subCategory: string) {
  try {
    await connectToDatabase()

    const posts = await Post.find({ subCategory, isPublished: true })
      .sort({ createdAt: 1 })
      .select('title slug _id')
      .lean()

    const plainPosts = posts.map((post) => ({
      ...post,
      _id: post._id.toString(),
    }))

    return plainPosts
  } catch (error) {
    return {
      success: false,
      error: JSON.stringify(error),
    }
  }
}

// 서브카테고리 기준으로 카테고리별 글 가져오기
export async function getPostsForSubCategory(subCategory: string) {
  try {
    await connectToDatabase()

    const posts = await Post.find({ subCategory, isPublished: true })
      .sort({ createdAt: 1 })
      .lean()

    const totalCount = await Post.countDocuments({
      subCategory,
      isPublished: true,
    })

    return {
      success: true,
      posts: JSON.parse(JSON.stringify(posts)),
      totalCount,
    }
  } catch (error) {
    console.error('게시물 가져오기 오류:', error)
    return {
      success: false,
      error: JSON.stringify(error),
    }
  }
}

// 조회수 증가
export async function increasePostViews(postId: string) {
  try {
    await connectToDatabase()
    await Post.findByIdAndUpdate(postId, {
      $inc: { numViews: 1 },
    })
  } catch (error) {
    console.error('조회수 증가 오류:', error)
  }
}

// 좋아요 버튼
export async function likePost(postId: string) {
  const session = await auth()
  if (!session?.user?.id) {
    return { success: false, message: '로그인이 필요합니다.' }
  }

  try {
    await connectToDatabase()
    const post = await Post.findById(postId)

    if (!post) {
      return { success: false, message: '글을 찾을 수 없습니다.' }
    }

    const userId = session.user.id
    post.likes = post.likes ?? []

    const userLike = post.likes.find((like) => like.user.toString() === userId)

    if (userLike) {
      if (userLike.count >= 10) {
        return {
          success: false,
          message: '최대 10번까지 좋아요 할 수 있어요.',
        }
      }
      userLike.count += 1
    } else {
      post.likes.push({ user: userId, count: 1 })
    }

    post.numLikes = (post.numLikes ?? 0) + 1
    await post.save()

    return {
      success: true,
      numLikes: post.numLikes,
      message: '좋아요! 감사합니다!',
    }
  } catch (error) {
    return {
      success: false,
      error: JSON.stringify(error),
    }
  }
}
