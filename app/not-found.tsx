import Link from '@/components/Link'

export default function NotFound() {
  return (
    <section className="site-container">
      <div className="grid">
        <div className="col-span-full md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
          <h1 className="component-title component-title--main">
            Sorry, this page couldn't be found
          </h1>

          <p>But dont worry, you can find plenty of other things on the homepage.</p>
          <p>
            <Link href="/">Back to homepage</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
