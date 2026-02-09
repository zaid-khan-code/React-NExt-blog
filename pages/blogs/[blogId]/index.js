import Head from 'next/head'
import BlogPostDetail from '@/components/blog/BlogPostDetail'
import { mockPosts } from '@/data/mockPosts'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function Blog() {
  const router = useRouter()
  const { blogId } = router.query

  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!router.isReady) return

    async function loadPost() {
      const id = Number(blogId)
      const found = mockPosts.find(p => p.id === id)
      setPost(found)
      setLoading(false)
    }

    loadPost()
  }, [router.isReady, blogId])

  if (loading) {
    return (
      <>
        <Head>
          <title>Loading... | React Next Blog</title>
        </Head>
        Loading...
      </>
    )
  }
  if (!post) {
    return (
      <>
        <Head>
          <title>Post not found | React Next Blog</title>
        </Head>
        Post not found
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{post.title} | React Next Blog</title>
      </Head>
      <BlogPostDetail post={post} />
    </>
  )
}

export default Blog
