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
      <section className="component-block component-block--padding component-block--bg-neutral">
        <div className="site-container">
          <div className="grid">
            <div className="col-span-full justify-self-center md:col-span-4 xl:col-span-3 xl:col-start-2">
              {/* Image dimensions should be 3x the size of the width/height */}
              <Image
                src={'/static/img/bio/' + siteMetadata.author.toLowerCase().replace(/\s+/g, '') + '.jpg'}
                alt={siteMetadata.author}
                className="rounded-full md:mt-8"
                width={192}
                height={192}
              />
            </div>

            <div className="col-span-full md:col-span-8 xl:col-span-6">
              <h1 className="component-title component-title--main">About</h1>
              <p>
                I'm Ryan, a front-end developer based in Leeds, UK. I been professionally creating
                websites for around 10 years (along with design and print work within this time).
              </p>

              <p>
                You can email me at{' '}
                <strong>
                  ryan＠
                  <a
                    href="https://ryanfitton.co.uk"
                    className="!text-typography-default no-underline dark:!text-typography-default-dark"
                  >
                    ryanfitton.co.uk
                  </a>
                </strong>{' '}
                (don’t copy/paste it this email address, due to spam prevention methods implemented)
              </p>
              <p>
                <Link href="/about">Read more</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

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
              {!posts.length && 'No posts found.'}
              {posts.slice(0, MAX_DISPLAY).map((post) => {
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

          {posts.length > MAX_DISPLAY && (
            <div className="col-span-full md:col-span-4 md:col-start-3 lg:col-span-8 lg:col-start-5">
              <div className="component-posts-pagination component-block">
                <nav className="component-posts-pagination__navigation">
                  <Link href="/about" className="component-posts-pagination__paginate">
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
