import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Colophon' })

export default function Colophon() {
  return (
    <>
      <section className="site-container">
        <div className="grid">
          <div className="prose dark:prose-invert col-span-full md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-start-4">
            <h2 className="component-title component-title--main">About this website</h2>

            <p>
              Built and maintained since August 2024. Previously built with WordPress (2014-2024). Repository for this website [here](https://github.com/ryanfitton/ryanfitton-nextjs-2024).
            </p>

            <ul>
              <li>
                <p>
                  Running on Next.JS, using a heavily forked copy of{' '}
                  <Link href={`https://github.com/timlrx/tailwind-nextjs-starter-blog`}>
                    tailwind-nextjs-starter-blog
                  </Link>
                  , with custom 'Portfolio' posts section. Running version: `2.3.0` with TailWind version: `4.0.5` and Next.JS version: `15.1.6`.
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
                  Hosted on <Link href={`https://pages.github.com/`}>Github Pages</Link>
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
            </ul>

            <p>
              Visit the Status Page here:{' '}
              <Link href={`https://status.ryanfitton.co.uk/`}>status.ryanfitton.co.uk</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
