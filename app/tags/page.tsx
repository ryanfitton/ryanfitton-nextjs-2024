import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug as slugger } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <>
      <section className="site-container" role="generic" aria-label="Page Content Section">
        <div className="grid">
          <div className="col-span-full md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-start-4">
            {tagKeys.length > 0 ? (
              <>
                <p>Browse blog posts by tag:</p>
                <ul className="component-posts-tag-list">
                  {sortedTags.map((t) => {
                    return (
                      <li key={t}>
                        <span>
                          <Tag text={t} />
                        </span>
                        {` (${tagCounts[t]})`}
                      </li>
                    )
                  })}
                </ul>
              </>
            ) : (
              <>
                <p>No tags found.</p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
