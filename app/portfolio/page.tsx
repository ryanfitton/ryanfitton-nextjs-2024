import PortfolioListLayout from '@/layouts/PortfolioListLayout'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allPortfolios } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Portfolio' })

export default function PortfolioPage() {
  const posts = allCoreContent(sortPosts(allPortfolios))
  const pageNumber = 1
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <PortfolioListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
    />
  )
}
