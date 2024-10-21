import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'
import { slug } from 'github-slugger'
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
              <Image
                src="/static/img/bio/ryan-fitton@1x.jpg"
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
