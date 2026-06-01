import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug } from '@/lib/blog'

const slug = 'tab-management-is-a-prediction-problem'

const post = getBlogPostBySlug(slug)

export const metadata: Metadata = post
  ? {
      title: `${post.title} | Maya Sagalin`,
      description: post.preview,
      openGraph: {
        title: `${post.title} | Maya Sagalin`,
        description: post.preview,
        type: 'article',
      },
    }
  : {
      title: 'Post not found | Maya Sagalin',
    }

export default function TabManagementPostPage() {
  const currentPost = getBlogPostBySlug(slug)

  if (!currentPost) {
    notFound()
  }

  const PostComponent = currentPost.component

  return (
    <main className="px-6 pt-32 pb-24 md:pt-40 md:pb-32">
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <p className="text-sm font-medium text-indigo-600 mb-4">Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1C1C1E] tracking-tight leading-tight mb-5">
            {currentPost.title}
          </h1>
          <div className="space-y-1">
            <p className="text-base md:text-lg text-gray-500 italic">By {currentPost.author}</p>
            <p className="text-sm text-gray-400">{currentPost.publishedAt}</p>
          </div>
        </header>

        <div className="blog-prose">
          <PostComponent />
        </div>
      </article>
    </main>
  )
}
