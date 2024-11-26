import { writeFileSync, mkdirSync, readFileSync } from 'fs'
import path from 'path'
import { slug } from 'github-slugger'
import { escape } from 'pliny/utils/htmlEscaper.js'
import siteMetadata from '../data/siteMetadata.js'
import tagData from '../app/tag-data.json' assert { type: 'json' }
import { allBlogs } from '../.contentlayer/generated/index.mjs'
import { sortPosts } from 'pliny/utils/contentlayer.js'

const cwd = process.cwd()

const outputFolder = process.env.EXPORT ? 'out' : 'public'

console.log(outputFolder)

const generateRssItem = (config, post) => `
  <item>
    <guid>${config.siteUrl}/blog/${post.slug}</guid>
    <title>${escape(post.title)}</title>
    <link>${config.siteUrl}/blog/${post.slug}</link>
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

async function generateRSS(config, allBlogs, page = 'feed.xml') {


  // Writing to the file 5 times
  // with the append file mode
  for (let i = 0; i < 5; i++) {
    writeFileSync(path.resolve(`${cwd}`, `./${outputFolder}/movies.txt`), 'Movie ' + i + '\n', {
      encoding: 'utf8',
      flag: 'a+',
      mode: 0o666,
    })
  }

  console.log('File written successfully 5 times\n')
  console.log('The written file has the following contents:')
  console.log(readFileSync(path.resolve(`${cwd}`, `./${outputFolder}/movies.txt`), 'utf8'))




  const publishPosts = allBlogs.filter((post) => post.draft !== true)
  // RSS for blog post
  if (publishPosts.length > 0) {
    //console.log('publishPosts.length > 0  -- TRUE')

    const rss = generateRss(config, sortPosts(publishPosts))

    //console.log(rss)

    try {
      //console.log('Trying to write rss ' + `./${outputFolder}/${page}`)
      writeFileSync(`./${outputFolder}/${page}`, rss)
    } catch (err) {
      console.log('Error writing ' + `./${outputFolder}/${page}`)
      //console.log(rss)
      throw err
    }

    for (const tag of Object.keys(tagData)) {
      //console.log('const tag of Object.keys(tagData) -- ' + tag)

      const filteredPosts = allBlogs.filter((post) => post.tags.map((t) => slug(t)).includes(tag))
      const rss = generateRss(config, filteredPosts, `tags/${tag}/${page}`)

      //console.log(rss)
      const rssPath = path.join(outputFolder, 'tags', tag)
      //console.log(rssPath)

      try {
        //console.log('Trying to make directory rssPath ' + `${rssPath}`)
        mkdirSync(rssPath, { recursive: true })
      } catch (err) {
        console.log('Error trying to make directory rssPath ' + `${rssPath}`)
        console.log(rssPath)
        throw err
      }

      try {
        //console.log('Trying to write rss ' + `${path.join(rssPath, page)}`)
        writeFileSync(path.join(rssPath, page), rss)
      } catch (err) {
        console.log('Error writing ' + `${path.join(rssPath, page)}`)
        //console.log(path.join(rssPath, page))
        //console.log(rss)
        throw err
      }
    }
  }
}

const rss = () => {
  generateRSS(siteMetadata, allBlogs)
  //console.log('RSS feed generated...')
}
export default rss
