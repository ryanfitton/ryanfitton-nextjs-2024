/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import { usePathname } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Portfolio } from 'contentlayer/generated'
import Link from '@/components/Link'
import Card from '@/components/Card'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface PortfolioListLayoutProps {
  posts: CoreContent<Portfolio>[]
  initialDisplayPosts?: CoreContent<Portfolio>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="col-span-full md:col-span-4 md:col-start-3 lg:col-span-8 lg:col-start-5">
      <div className="component-posts-pagination component-block">
        <nav className="component-posts-pagination__navigation">
          {!prevPage && (
            <button
              className="component-posts-pagination__paginate !cursor-auto !opacity-50"
              disabled={!prevPage}
            >
              Previous
            </button>
          )}
          {prevPage && (
            <Link
              className="component-posts-pagination__paginate"
              href={
                currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`
              }
              rel="prev"
            >
              Previous
            </Link>
          )}

          <span>
            {currentPage} of {totalPages}
          </span>

          {!nextPage && (
            <button
              className="component-posts-pagination__paginate !cursor-auto !opacity-50"
              disabled={!nextPage}
            >
              Next
            </button>
          )}
          {nextPage && (
            <Link
              className="component-posts-pagination__paginate"
              href={`/${basePath}/page/${currentPage + 1}`}
              rel="next"
            >
              Next
            </Link>
          )}
        </nav>
      </div>
    </div>
  )
}

export default function PortfolioListLayout({
  posts,
  initialDisplayPosts = [],
  pagination,
}: PortfolioListLayoutProps) {
  const pathname = usePathname()

  //Filter out draft posts
  const displayPosts = (initialDisplayPosts.length > 0 ? initialDisplayPosts : posts).filter(
    (post) => post.draft !== true
  )

  return (
    <>
      <section className="site-container">
        <div className="grid">
          <div className="col-span-full md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
            <ul className="component-posts-portfolio-list grid">
              {displayPosts.map((post) => {
                const { path, cardImgSrc, title, summary } = post
                return (
                  <li className="col-span-full lg:col-span-6" key={path}>
                    <Card
                      key={path}
                      title={title}
                      description={summary != undefined ? summary : ''}
                      imgSrc={cardImgSrc}
                      href={`/${path}`}
                    />
                  </li>
                )
              })}
            </ul>
          </div>

          {pagination && pagination.totalPages > 1 && (
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
          )}
        </div>
      </section>
    </>
  )
}