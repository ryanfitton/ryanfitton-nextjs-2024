import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: '404', description: 'Error' });

export default function NotFound() {
  return (
    <section className="site-container" role="generic" aria-label="404 Not Found Section">
      <div className="grid">
        <div className="col-span-full md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-start-4">
          <h2
            className="component-title component-title--main"
            role="heading"
            aria-label="404 Not Found Heading"
          >
            Sorry, this page couldn't be found
          </h2>

          <p>But dont worry, you can find plenty of other things on the homepage.</p>
          <p>
            <Link href="/">Back to homepage</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
