import siteMetadata from '@/data/siteMetadata'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allPortfolios } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import PortfolioListLayout from '@/layouts/PortfolioListLayout'

const POSTS_PER_PAGE = 6

export const generateMetadata = () =>
  genPageMetadata({
    title: 'Portfolio',
    description: `Professional portfolio of ${siteMetadata.author ?? ''}, view digital web work, print work and more.`,
  })

export default async function PortfolioPage(props: { searchParams: Promise<{ page: string }> }) {
  const posts = allCoreContent(sortPosts(allPortfolios))
  const pageNumber = 1
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <PortfolioListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
    />
  )
}
