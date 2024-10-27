'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
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

export default function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((post) => {
    const searchContent = post.title + post.summary + post.tags?.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <section className="site-container">
        <div className="grid">
          <div className="col-span-full md:col-span-4 xl:col-span-3">
            <aside className="site-aside">
              <div className="component-posts-sidebar component-block component-block--outline-secondary component-block--rounded component-block--padding">
                <h5 className="component-posts-sidebar__title component-title">
                  <Link href={`/blog`}>Search</Link>
                </h5>

                <div className="component-posts-sidebar__content component-block component-block--padding-small">
                  <div className="relative max-w-lg">
                    TODO
                    <label>
                      <span className="sr-only">Search articles</span>
                      <input
                        aria-label="Search articles"
                        type="text"
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Search articles"
                        className="block w-full rounded-md border bg-white px-4 py-2"
                      />
                    </label>
                    <svg
                      className="absolute right-3 top-3 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="col-span-full md:col-span-8 xl:col-span-8 xl:col-start-5">
            <ul className="component-posts-article-list">
              {!filteredBlogPosts.length && 'No posts found.'}
              {displayPosts.map((post) => {
                const { path, date, title, summary, tags } = post
                return (
                  <li key={path}>
                    <article className="component-posts-article">
                      <dl className="component-posts-article__date">
                        <dt className="sr-only">Published on</dt>
                        <dd>
                          <time className="component-posts-article__date--time" dateTime={date}>
                            {formatDate(date, siteMetadata.locale)}
                          </time>
                        </dd>
                      </dl>

                      <h2 className="component-posts-article__title">
                        <Link href={`/${path}`}>{title}</Link>
                      </h2>

                      <ul className="component-posts-tag-list component-posts-tag-list--article">
                        {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                      </ul>

                      <div className="component-posts-article__excerpt">{summary}</div>
                    </article>
                  </li>
                )
              })}
            </ul>
          </div>

          {pagination && pagination.totalPages > 1 && !searchValue && (
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
          )}
        </div>
      </section>
    </>
  )
}
