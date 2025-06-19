import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'
import { slug as slugger } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <>
      <section className="component-block component-block--padding component-block--bg-secondary" role="section" aria-label="Bio Section">
        <div className="site-container">
          <div className="grid">
            <div className="col-span-full justify-self-center md:col-span-4 xl:col-span-3 xl:col-start-2">
              {/* Image dimensions should be 3x the size of the width/height */}
              <Image
                src={
                  '/static/img/bio/' +
                  siteMetadata.author.toLowerCase().replace(/\s+/g, '') +
                  '.jpg'
                }
                alt={siteMetadata.author}
                className="rounded-full md:mt-8"
                width={192}
                height={192}
              />
            </div>

            <div className="prose dark:prose-invert col-span-full md:col-span-8 xl:col-span-6">
              <h2 className="component-title component-title--main" role="heading" aria-label="About Heading">About</h2>
              <p>
                I'm Ryan, a front-end developer based in Leeds, UK. I've been professionally
                creating websites for around 10 years (along with design and print work within this
                time).
              </p>

              <p>
                You can email me at{' '}
                <strong>
                  <span className="!text-typography-default !no-underline">ryan＠</span>
                  <a
                    href="https://ryanfitton.co.uk"
                    className="!text-typography-default !no-underline"
                  >
                    ryanfitton.co.uk
                  </a>
                </strong>{' '}
              </p>
              <p>
                <Link href="/about">Read more</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container" role="section" aria-label="Posts Section">
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
              {!posts.length && 'No posts found.'}
              {posts.slice(0, MAX_DISPLAY).map((post) => {
                const { path, date, title, summary, tags } = post
                return (
                  <li key={path}>
                    <article className="component-posts-article" role="article" aria-label="Article Content">
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

          {posts.length > MAX_DISPLAY && (
            <div className="col-span-full md:col-span-4 md:col-start-3 lg:col-span-8 lg:col-start-5">
              <div className="component-posts-pagination component-block">
                <nav className="component-posts-pagination__navigation" role="navigation" aria-label="Read More Navigation">
                  <Link href="/blog/" className="component-posts-pagination__paginate" role="menuitem" aria-label="Read More Link">
                    Read more
                  </Link>
                </nav>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
