import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import tagData from 'app/tag-data.json'
import siteMetadata from '@/data/siteMetadata'
import { slug as slugger } from 'github-slugger'

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const { filePath, path, slug, date, title, tags } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <section className="site-container">
        <div className="grid">
          <div className="col-span-full md:col-span-4 xl:col-span-3">
            <aside className="site-aside">
              <div className="component-posts-sidebar component-block component-block--outline-secondary component-block--rounded component-block--padding">
                <h5 className="component-posts-sidebar__title component-title">
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
            <article className="component-posts-article">
              <h1 className="component-posts-article__title" dangerouslySetInnerHTML={{ __html: title }}></h1>

              <dl className="component-posts-article__date">
                <dt className="sr-only">Published on</dt>
                <dd>
                  <time dateTime={date} className="component-posts-article__date--time">
                    {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                  </time>
                </dd>
              </dl>

              <div className="component-posts-article__body">{children}</div>

              <hr className="prose-hr component-posts-article__divider" />

              <p className="text-sm text-stone-500 dark:text-typography-default-dark/50">
                <Link href={discussUrl(path)} rel="nofollow">
                  Discuss on X (Twitter)
                </Link>
              </p>

              <hr className="prose-hr component-posts-article__divider" />

              {tags && (
                <ul className="component-posts-tag-list component-posts-tag-list--article">
                  <li>Tagged as:</li>
                  {tags.map((tag) => (
                    <li key={tag}>
                      <span>
                        <Tag key={tag} text={tag} />
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <hr className="prose-hr component-posts-article__divider" />

              {siteMetadata.comments && (
                <div className="component-posts-article__comments">
                  <Comments slug={slug} />
                </div>
              )}
            </article>
          </div>
        </div>
      </section>
    </SectionContainer>
  )
}
