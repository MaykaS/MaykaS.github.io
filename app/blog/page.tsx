import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog | Maya Sagalin',
  description: 'Long-form technical writing and product essays by Maya Sagalin.',
}

export default function BlogIndexPage() {
  const posts = getAllBlogPosts()

  return (
    <main className="px-6 pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1C1C1E] mb-3">Blog</h1>
        <div className="w-10 h-0.5 bg-indigo-600 mb-10" />

        <div className="grid gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl border border-gray-100 p-7 md:p-8 shadow-[0_10px_30px_rgba(28,28,30,0.03)]"
            >
              <p className="text-sm font-medium text-indigo-600 mb-4">{post.author}</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1C1C1E] leading-tight mb-4">
                <Link href={`/blog/${post.slug}`} className="hover:text-indigo-600 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-6 max-w-3xl">
                {post.preview}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                Read article
                <span aria-hidden="true">-&gt;</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
