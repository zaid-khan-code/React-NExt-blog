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

  if (loading) return <>Loading...</>
  if (!post) return <>Post not found</>

  return <BlogPostDetail post={post} />
}

export default Blog
