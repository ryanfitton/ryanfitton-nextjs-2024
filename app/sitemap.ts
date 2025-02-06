import { MetadataRoute } from 'next'
import { allBlogs, allPortfolios } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  //The site URL
  const siteUrl = siteMetadata.siteUrl

  //All Blog post routes
  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }))

  //All Portfolio post routes
  const portfolioRoutes = allPortfolios
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }))

  //Routes to static pages
  const routes = ['', 'about', 'blog', 'portfolio', 'tags', 'colophon', 'policies'].map(
    (route) => ({
      url: `${siteUrl}/${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  )

  return [...routes, ...blogRoutes, ...portfolioRoutes]
}
