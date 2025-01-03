import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Portfolio } from 'contentlayer/generated'
import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import React from 'react'

interface LayoutProps {
  content: CoreContent<Portfolio>
  children: ReactNode
}

export default function PortfolioPostLayout({ content, children }: LayoutProps) {
  const { title, portfolioClient, portfolioType, portfolioHref, lead } = content

  return (
    <SectionContainer>
      <section className="site-container">
        <div className="grid">
          <div className="col-span-full md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
            <article className="component-posts-article">
              <h1 className="component-posts-article__title">{title}</h1>

              <section className="component-posts-portfolio-details">
                <div className="grid">
                  <div className="col-span-full md:col-span-4 xl:col-span-3">
                    <ul className="component-posts-portfolio-details__list">
                      <li>
                        <span className="font-medium">Client:</span> {portfolioClient}
                      </li>
                      <li>
                        <span className="font-medium">Type:</span> {portfolioType}
                      </li>
                      <li className="mt-4">
                        {portfolioHref ? (
                          <>
                            <Link href={portfolioHref} target="_blank">
                              <span className="font-medium">Visit website</span>
                            </Link>
                          </>
                        ) : (
                          <></>
                        )}
                      </li>
                    </ul>
                  </div>

                  <div className="col-span-full md:col-span-8 xl:col-span-9">
                    <p className="component-posts-portfolio-details__intro lead">{lead}</p>
                  </div>
                </div>
              </section>

              <hr className="prose-hr component-posts-article__divider" />

              <div className="component-posts-article__body">{children}</div>
            </article>
          </div>
        </div>
      </section>
    </SectionContainer>
  )
}
