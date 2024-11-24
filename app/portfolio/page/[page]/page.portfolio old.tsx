import portfolioData from '@/data/portfolioData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Portfolio' })

export default function Portfolio() {
  return (
    <>
      <section className="site-container">
        <div className="grid">
          <div className="col-span-full md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
            <ul className="component-posts-portfolio-list grid">
              {portfolioData &&
                portfolioData.map((d, i) => (
                  <li className="col-span-full lg:col-span-6" key={i}>
                    <Card
                      key={d.title}
                      title={d.title}
                      description={d.description}
                      imgSrc={d.imgSrc}
                      href={d.href}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
