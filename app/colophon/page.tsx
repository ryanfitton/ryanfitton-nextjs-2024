import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Colophon' })

export default function Colophon() {
  return (
    <>
      <section className="site-container">
        <div className="grid">
          <div className="prose col-span-full md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-start-4">
            <h2 className="component-title component-title--main">About this website</h2>

            <ul>
              <li>
                <p>
                  Built with Next.JS, using a heavily forked copy of{' '}
                  <Link href={`https://github.com/timlrx/tailwind-nextjs-starter-blog`}>
                    tailwind-nextjs-starter-blog
                  </Link>
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

            <p>
              In August 2024, I decided to switch from my old WordPress powered site, to one built
              on Next.JS, mainly due to:
            </p>

            <ul>
              <li>
                <p>
                  I can host this statically with Github Pages by exporting as{' '}
                  <Link
                    href={`https://nextjs.org/docs/pages/building-your-application/deploying/static-exports`}
                  >
                    static pages
                  </Link>{' '}
                  which will reduce security risks, and save me some money in hosting fees.
                </p>
              </li>
              <li>
                <p>
                  I've used WordPress for most of my career (+ 10 years) and need to build-up my
                  knowledge in the JS framework space.
                </p>
              </li>
              <li>
                <p>
                  The{' '}
                  <Link
                    href={`https://css-tricks.com/catching-up-on-the-wordpress-wp-engine-sitch/`}
                  >
                    on-going saga between Automattic and WP Engine
                  </Link>{' '}
                  is pushing me away from the 'happy' community atmosphere which used to be
                  prevalent in the WordPress community. I understand Matt's reasoning behind his
                  recent speech at{' '}
                  <Link
                    href={`https://www.reddit.com/r/Wordpress/comments/1flqqm5/matt_just_threw_wp_engine_under_the_bus_hard/`}
                  >
                    WordCamp US 2024
                  </Link>{' '}
                  but I don't feel this was the correct approach.
                </p>
              </li>
              <li>
                <p>I wanted an opportunity to use Tailwind</p>
              </li>
            </ul>

            <p>
              This transition process is currently on-going. As of January 2025 I'm working in my
              spare time to add the final touches, and will then migrate my old{' '}
              <Link href={`/portfolio-old`}>Portfolio</Link> items over to this new <Link href={`/portfolio`}>platform</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
