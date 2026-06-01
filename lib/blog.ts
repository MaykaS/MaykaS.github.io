import type { ComponentType } from 'react'
import TabManagementPost from '@/content/blog/tab-management-is-a-prediction-problem.mdx'

export type BlogPost = {
  slug: string
  title: string
  author: string
  publishedAt: string
  preview: string
  component: ComponentType
}

const blogPosts: BlogPost[] = [
  {
    slug: 'tab-management-is-a-prediction-problem',
    title: 'Tab Management Is a Prediction Problem',
    author: 'Maya Sagalin',
    publishedAt: 'June 1, 2026',
    preview:
      "A technical essay on why browser tab management should be predictive, not cleanup-driven, and what Tab Agent's benchmark actually proves.",
    component: TabManagementPost,
  },
]

export function getAllBlogPosts() {
  return blogPosts
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
