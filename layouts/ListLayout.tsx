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
import Image from 'next/image'
import tagData from 'app/tag-data.json'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  initialDisplayPosts?: CoreContent<Blog>[]
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
    <div className="col-span-full md:col-span-8 md:col-start-5 lg:col-span-8 lg:col-start-5">
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

export default function ListLayout({
  posts,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  //Filter out draft posts
  const displayPosts = (initialDisplayPosts.length > 0 ? initialDisplayPosts : posts).filter(
    (post) => post.draft !== true
  )

  return (
    <>
      <section className="site-container" role="section" aria-label="Page Content Section">
        <div className="grid">
          <div className="col-span-full md:col-span-4 xl:col-span-3">
            <aside className="site-aside" role="complementary" aria-label="Post Tags Sidebar">
              <div className="component-posts-sidebar component-block component-block--outline-secondary component-block--rounded component-block--padding">
                <h5 className="component-posts-sidebar__title component-title" role="heading" aria-label="All Posts Heading">
                  <Link href={`/blog`}>All Posts</Link>
                </h5>

                <div className="component-posts-sidebar__content component-block component-block--padding-small">
                  <ul className="component-posts-tag-list component-posts-tag-list--sidebar">
                    {sortedTags.map((t) => {
                      return (
                        <li key={t}>
                          <span>
                            <Link
                              href={`/tags/${slugger(t)}`}
                              aria-label={`View posts tagged ${t}`}
                            >
                              {`${t}`}
                            </Link>
                          </span>
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
                const { path, date, featuredImgSrc, title, summary, tags } = post
                return (
                  <li key={path}>
                    <article className="component-posts-article" role="article" aria-label="Article Content">
                      {featuredImgSrc && (
                        <Link href={`/${path}`}>
                          <Image
                            src={featuredImgSrc}
                            alt={title}
                            width="900"
                            height="265"
                            className="component-posts-article__featured-image"
                            style={{
                              objectFit: 'cover',
                            }}
                          />
                        </Link>
                      )}

                      <dl className="component-posts-article__date">
                        <dt className="sr-only">Published on</dt>
                        <dd>
                          <time
                            className="component-posts-article__date--time"
                            dateTime={date}
                            suppressHydrationWarning
                          >
                            {formatDate(date, siteMetadata.locale)}
                          </time>
                        </dd>
                      </dl>

                      <h2 className="component-posts-article__title" role="heading" aria-label="Article Heading">
                        <Link href={`/${path}`} dangerouslySetInnerHTML={{ __html: title }}></Link>
                      </h2>

                      <ul className="component-posts-tag-list component-posts-tag-list--article">
                        {tags.map((tag) => (
                          <li key={tag}>
                            <span>
                              <Tag key={tag} text={tag} />
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div
                        className="component-posts-article__excerpt"
                        dangerouslySetInnerHTML={{ __html: summary != undefined ? summary : '' }}
                      ></div>
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
