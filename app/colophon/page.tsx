import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Colophon' })

export default function Colophon() {
  return (
    <>
      <section className="site-container">
        <div className="grid">
          <div className="col-span-full md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
            Test
          </div>
        </div>
      </section>
    </>
  )
}
