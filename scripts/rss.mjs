import { writeFileSync, mkdirSync, readFileSync } from 'fs'
import path from 'path'
import { slug as slugger } from 'github-slugger'
import { escape } from 'pliny/utils/htmlEscaper.js'
import siteMetadata from '../data/siteMetadata.js'
import tagData from '../app/tag-data.json' with { type: 'json' }
import { allBlogs, allPortfolios } from '../.contentlayer/generated/index.mjs'
import { sortPosts } from 'pliny/utils/contentlayer.js'

const outputFolder = process.env.EXPORT ? 'out' : 'public'

const generateRssItem = (config, post) => `
  <item>
    <guid>${config.siteUrl}/${post.type.toLowerCase()}/${post.slug}</guid>
    <title>${escape(post.title)}</title>
    <link>${config.siteUrl}/${post.type.toLowerCase()}/${post.slug}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${config.email} (${config.author})</author>
    ${post.tags && post.tags.map((t) => `<category>${t}</category>`).join('')}
  </item>
`

const generateRss = (config, posts, page = 'feed.xml') => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(config.title)}</title>
      <link>${config.siteUrl}/blog</link>
      <description>${escape(config.description)}</description>
      <language>${config.language}</language>
      <managingEditor>${config.email} (${config.author})</managingEditor>
      <webMaster>${config.email} (${config.author})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${config.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map((post) => generateRssItem(config, post)).join('')}
    </channel>
  </rss>
`

async function generateRSS(config, posts, page = 'feed.xml') {
  const publishPosts = posts.filter((post) => post.draft !== true)
  // RSS for blog post
  if (publishPosts.length > 0) {
    const rss = generateRss(config, sortPosts(publishPosts))

    try {
      writeFileSync(`./${outputFolder}/${page}`, rss)
    } catch (err) {
      console.log('Error writing ' + `./${outputFolder}/${page}`)
      throw err
    }

    //Tags
    for (const tag of Object.keys(tagData)) {
      const filteredPosts = posts.filter(
        (post) => post.tags && post.tags.map((t) => slugger(t)).includes(tag)
      ) //If the looped post contains tags and the tag matches

      //If there are filtered posts which have tags
      if (filteredPosts.length) {
        const rss = generateRss(config, filteredPosts, `tags/${tag}/${page}`)
        const rssPath = path.join(outputFolder, 'tags', tag)

        try {
          mkdirSync(rssPath, { recursive: true })
        } catch (err) {
          console.log('Error trying to make directory rssPath ' + `${rssPath}`)
          throw err
        }

        try {
          writeFileSync(path.join(rssPath, page), rss)
        } catch (err) {
          console.log('Error writing ' + `${path.join(rssPath, page)}`)
          throw err
        }
      }
    }
  }
}

const rss = () => {
  //Include Blogs and Portfolio items. Concat together.
  var blogs = allBlogs
  var portfolios = allPortfolios
  blogs = blogs.concat(portfolios)

  generateRSS(siteMetadata, blogs)
}
export default rss
