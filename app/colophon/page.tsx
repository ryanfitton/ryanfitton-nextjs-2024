import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export const generateMetadata = () =>
  genPageMetadata({
    title: 'Colophon',
    description: `Explore the colophon of ${siteMetadata.author ? `${siteMetadata.author}'s` : 'this'} website, detailing the tools, technologies, and design choices behind ${siteMetadata.siteUrl ?? 'this website'}`,
  })

export default function Colophon() {
  return (
    <>
      <section className="site-container" role="generic" aria-label="Page Content Section">
        <div className="grid">
          <div className="prose dark:prose-invert col-span-full md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-start-4">
            <h2
              className="component-title component-title--main"
              role="heading"
              aria-label="About this website Heading"
            >
              About this website
            </h2>

            <p>
              Built and maintained since August 2024. Previously built with WordPress (2014-2024).
              Repository for this website{' '}
              <Link href={`https://github.com/ryanfitton/ryanfitton-nextjs-2024`}>here</Link>.
            </p>

            <ul>
              <li>
                <p>
                  Running on Next.JS, using a heavily forked copy of{' '}
                  <Link href={`https://github.com/timlrx/tailwind-nextjs-starter-blog`}>
                    tailwind-nextjs-starter-blog
                  </Link>
                  , with custom 'Portfolio' posts section, and many other custom changes. Running
                  version: `2.4.0` with{' '}
                  <Link href={`https://github.com/tailwindlabs/tailwindcss/releases`}>
                    TailWind
                  </Link>{' '}
                  version: `4.1.8`,{' '}
                  <Link href={`https://github.com/vercel/next.js/releases`}>Next.JS</Link> version:
                  `15.3.3` and <Link href={`https://github.com/yarnpkg/berry/releases`}>Yarn</Link>{' '}
                  version: `4.9.1`.
                </p>
              </li>
              <li>
                <p>
                  Styled with a custom theme built upon{' '}
                  <Link href={`https://tailwindcss.com/`}>Tailwind</Link>
                </p>
              </li>
              <li>
                <p>
                  Hosted on <Link href={`https://pages.github.com/`}>Github Pages</Link> and
                  protected by <Link href={`https://www.cloudflare.com/`}>Cloudflare</Link>.
                </p>
              </li>
              <li>
                <p>
                  Typefaces; Main:{' '}
                  <Link href={`https://fonts.google.com/specimen/Red+Hat+Text`}>Red Hat Text</Link>{' '}
                  any Serifs use{' '}
                  <Link href={`https://fonts.google.com/specimen/Brygada+1918`}>Brygada 1918</Link>
                </p>
              </li>
              <li>
                <p>
                  Google PageSpeed scores:{' '}
                  <Link
                    href={`https://pagespeed.web.dev/analysis/https-ryanfitton-co-uk/wgsnxlb79n?form_factor=desktop`}
                  >
                    Desktop (97/100)
                  </Link>{' '}
                  and{' '}
                  <Link
                    href={`https://pagespeed.web.dev/analysis/https-ryanfitton-co-uk/wgsnxlb79n?form_factor=mobile`}
                  >
                    Mobile (59/100)
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  Mozilla Observatory score:{' '}
                  <Link
                    href={`https://developer.mozilla.org/en-US/observatory/analyze?host=ryanfitton.co.uk`}
                  >
                    Report B (75/100)
                  </Link>
                  .
                </p>
              </li>
            </ul>

            <hr className="prose-hr component-posts-article__divider" />

            <ul>
              <li>
                <p>
                  Social Links:{' '}
                  <Link href={`https://links.ryanfitton.co.uk/`}>links.ryanfitton.co.uk</Link>. This
                  is a fork from{' '}
                  <Link href={`https://github.com/sethcottle/littlelink/`}>LittleLink</Link>.
                </p>
              </li>
              <li>
                <p>
                  Status Page:{' '}
                  <Link href={`https://status.ryanfitton.co.uk/`}>status.ryanfitton.co.uk</Link>.
                  This is a fork from <Link href={`https://upptime.js.org/`}>Upptime</Link>.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
