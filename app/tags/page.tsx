import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <>
      <section className="site-container">
        <div className="grid">
          <div className="col-span-full md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
            <ul className="component-posts-tag-list component-posts-tag-list--article">
              {tagKeys.length === 0 && 'No tags found.'}
              {sortedTags.map((t) => {
                return (
                    <li key={t}>
                    <Link href={`/tags/${slug(t)}`} aria-label={`View posts tagged ${t}`}>
                        {`${t}`}
                    </Link>
                    {` (${tagCounts[t]})`}
                    </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
