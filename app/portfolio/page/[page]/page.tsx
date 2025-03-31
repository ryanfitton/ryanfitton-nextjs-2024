import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allPortfolios } from 'contentlayer/generated'
import PortfolioListLayout from '@/layouts/PortfolioListLayout'

const POSTS_PER_PAGE = 6

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allPortfolios.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))

  return paths
}

export default async function Page(props: { params: Promise<{ page: string }>, searchParams: Promise<{ page: string }> }) {
  const params = await props.params
  const posts = allCoreContent(sortPosts(allPortfolios))
  const pageNumber = parseInt(params.page as string)
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
