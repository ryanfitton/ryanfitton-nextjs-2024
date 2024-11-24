import PageTitle from '@/components/PageTitle'
import { components } from '@/components/MDXComponents'
import { notFound } from 'next/navigation'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { allPortfolios } from 'contentlayer/generated'
import type { Portfolio } from 'contentlayer/generated'
import PortfolioPostLayout from '@/layouts/PortfolioPostLayout'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

const isProduction = process.env.NODE_ENV === 'production'
const defaultLayout = 'PortfolioPostLayout'
const layouts = {
  PortfolioPostLayout
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const post = allPortfolios.find((p) => p.slug === slug)
  if (!post) {
    return
  }

  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()
  let imageList = [siteMetadata.socialBanner]
  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  }
}

export const generateStaticParams = async () => {
  const paths = allPortfolios.map((p) => ({ slug: p.slug.split('/') }))

  return paths
}

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  // Filter out drafts in production
  const sortedCoreContents = allPortfolios
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug)
  if (postIndex === -1) {
    return notFound()
  }

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  const post = allPortfolios.find((p) => p.slug === slug) as Blog
  const mainContent = post
  const jsonLd = post.structuredData

  const Layout = layouts[post.layout || defaultLayout]

  return (
    <>
      {isProduction && post && 'draft' in post && post.draft === true ? (
        <div className="mt-24 text-center">
          <PageTitle heading="404 Page not found" />
        </div>
      ) : (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Layout content={mainContent} next={next} prev={prev}>
            <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
          </Layout>
        </>
      )}
    </>
  )
}
