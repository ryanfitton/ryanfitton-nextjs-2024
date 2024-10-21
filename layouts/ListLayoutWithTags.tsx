/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import { usePathname } from 'next/navigation'
import { slug as slugger } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'

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

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <>
      <section className="site-container">
        <div className="grid">
          <div className="col-span-full md:col-span-4 xl:col-span-3">
            <aside className="site-aside">
              <div className="component-posts-sidebar component-block component-block--outline-neutral component-block--rounded component-block--padding">
                <h5 className="component-posts-sidebar__title component-title">
                  <Link href={`/blog`}>All Posts</Link>
                </h5>

                <div className="component-posts-sidebar__content component-block component-block--padding-small">
                  <ul className="component-posts-tag-list component-posts-tag-list--sidebar">
                    {sortedTags.map((t) => {
                      return (
                        <li key={t}>
                          <Link href={`/tags/${slugger(t)}`} aria-label={`View posts tagged ${t}`}>
                            {`${t}`}
                          </Link>
                          {` (${tagCounts[t]})`}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </aside>
          </div>

          <div className="col-span-full md:col-span-8 xl:col-span-8 xl:col-start-5">
            <ul className="component-posts-article-list">
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

          {pagination && pagination.totalPages > 1 && (
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
          )}
        </div>
      </section>
    </>
  )
}
