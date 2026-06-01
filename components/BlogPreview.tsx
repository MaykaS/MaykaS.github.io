import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/blog'

export default function BlogPreview() {
  const posts = getAllBlogPosts()

  return (
    <section id="blog" className="px-6 py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1E] mb-3">Blog</h2>
        <div className="w-10 h-0.5 bg-indigo-600 mb-10" />

        <div className="grid gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl border border-gray-100 p-7 md:p-8 shadow-[0_10px_30px_rgba(28,28,30,0.03)]"
            >
              <p className="text-sm font-medium text-indigo-600 mb-4">{post.author}</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#1C1C1E] leading-tight mb-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-indigo-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-6 max-w-3xl">
                {post.preview}
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  Read article
                  <span aria-hidden="true">-&gt;</span>
                </Link>
                <Link
                  href="/blog"
                  className="text-sm text-gray-500 hover:text-indigo-600 transition-colors"
                >
                  View all blog posts
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
