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
  const segments = pathname.split('/')
  const lastSegment = segments[segments.length - 1]
  const basePath = pathname
    .replace(/^\//, '') // Remove leading slash
    .replace(/\/page\/\d+\/?$/, '') // Remove any trailing /page
    .replace(/\/$/, '') // Remove trailing slash
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="col-span-full md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
      <div className="component-posts-pagination component-block">
        <nav className="component-posts-pagination__navigation" role="navigation" aria-label="Pagination Navigation">
          {!prevPage && (
            <button
              className="component-posts-pagination__paginate !cursor-auto !opacity-50"
              disabled={!prevPage}
              role="button"
              aria-label="Previous Page Button"
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
              role="menuitem"
              aria-label="Previous Page Link"
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
              role="button"
              aria-label="Next Page Button"
            >
              Next
            </button>
          )}
          {nextPage && (
            <Link
              className="component-posts-pagination__paginate"
              href={`/${basePath}/page/${currentPage + 1}`}
              rel="next"
              role="menuitem"
              aria-label="Next Page Link"
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
      <section className="site-container" role="section" aria-label="Page Content Section">
        <div className="grid">
          <div className="col-span-full md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
            <ul className="component-posts-portfolio-list grid">
              {displayPosts.map((post) => {
                const { path, featuredImgSrc, title, summary } = post
                return (
                  <li className="col-span-full lg:col-span-6" key={path}>
                    <Card
                      key={path}
                      title={title}
                      description={summary != undefined ? summary : ''}
                      imgSrc={featuredImgSrc}
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
