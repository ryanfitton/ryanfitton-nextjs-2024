import { defineDocumentType, ComputedFields, makeSource } from 'contentlayer2/source-files'
import { writeFileSync } from 'fs'
import readingTime from 'reading-time'
import { slug as slugger } from 'github-slugger'
import path from 'path'
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic'

// Remark packages
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import { remarkAlert } from 'remark-github-blockquote-alert'
import {
  remarkExtractFrontmatter,
  remarkCodeTitles,
  remarkImgToJsx,
  extractTocHeadings,
} from 'pliny/mdx-plugins/index.js'

// Rehype packages
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCitation from 'rehype-citation'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypePresetMinify from 'rehype-preset-minify'

import convertInlineFootnotes from './scripts/convert-inline-footnotes.js'
import siteMetadata from './data/siteMetadata'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js'


const root = process.cwd()
const isProduction = process.env.NODE_ENV === 'production'

//Heroicon mini link (https://heroicons.com/mini)
const rehypeAutolinkHeadingsIcon = fromHtmlIsomorphic(
  `
  <span className="component-posts-article__title-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 linkicon">
        <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
        <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
    </svg>
  </span>
`,
  { fragment: true }
)

/**
 * Remove yyyy-mm-dd and extension in file path to generate slug
 */
function formatSlug(slug) {
  const regex = /(\d{4})-(\d{2})-(\d{2})-/g
  return slug.replace(regex, '')
}

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: 'string',
    resolve: (doc) => formatSlug(doc._raw.flattenedPath.replace(/^.+?(\/)/, '')),
  },
  path: {
    type: 'string',
    resolve: (doc) => formatSlug(doc._raw.flattenedPath),
  },
  filePath: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFilePath,
  },
  toc: { type: 'string', resolve: (doc) => extractTocHeadings(doc.body.raw) },
}

/**
 * Count the occurrences of all tags across blog posts and write to json file
 */
function createTagCount(allBlogs) {
  const tagCount: Record<string, number> = {}
  allBlogs.forEach((file) => {
    if (file.tags && (!isProduction || file.draft !== true)) {
      file.tags.forEach((tag) => {
        const formattedTag = slugger(tag)
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1
        } else {
          tagCount[formattedTag] = 1
        }
      })
    }
  })
  writeFileSync('./app/tag-data.json', JSON.stringify(tagCount))
}

function createSearchIndexes(allBlogs, allPortfolios) {
  if (
    siteMetadata?.search?.provider === 'kbar' &&
    siteMetadata.search.kbarConfig.searchDocumentsPath
  ) {

    //Include Blogs and Portfolio items. Concat together.
    var blogs = allCoreContent(sortPosts(allBlogs));
    var portfolios = allCoreContent(sortPosts(allPortfolios));
    blogs = blogs.concat(portfolios);

    writeFileSync(
      `public/${siteMetadata.search.kbarConfig.searchDocumentsPath}`,
      JSON.stringify(blogs)

    )
    console.log('Local search index generated...')
  }
}

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },                          //Post title
    date: { type: 'date', required: true },                             //Post date `YYYY-MM-DD`
    lastmod: { type: 'date' },                                          //Post last modified date `YYYY-MM-DD`
    tags: { type: 'list', of: { type: 'string' }, default: [] },        //Array of tags e.g. `['Development', 'Code Snippets']`
    draft: { type: 'boolean' },                                         //true / false - If true, the post will not be shown
    summary: { type: 'string', required: true },                        //Short summary description shown in the card on the Blog index page
    featuredImgSrc: { type: 'string' },                                 //Image to be shown in the card on the Blog index page
    authors: { type: 'list', of: { type: 'string', required: true } },  //Array of authors e.g. `['Ryan Fitton']`
    canonicalUrl: { type: 'string' },                                   //Canonical URL
  },
  computedFields: {
    ...computedFields,
    structuredData: {
      type: 'json',
      resolve: (doc) => ({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: doc.title,
        datePublished: doc.date,
        dateModified: doc.lastmod || doc.date,
        description: doc.summary,
        image: siteMetadata.socialBanner,
        url: `${siteMetadata.siteUrl}/${formatSlug(
          doc._raw.flattenedPath.replace(/^.+?(\/)/, '')
        )}`,
      }),
    },
  },
}))

export const Portfolio = defineDocumentType(() => ({
  name: 'Portfolio',
  filePathPattern: 'portfolio/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },      //Post title
    date: { type: 'date', required: true },         //Post date `YYYY-MM-DD`
    lastmod: { type: 'date' },                      //Post last modified date `YYYY-MM-DD`
    draft: { type: 'boolean' },                     //true / false - If true, the post will not be shown
    summary: { type: 'string', required: true },    //Short summary description shown in the card on the Portfolio index page
    featuredImgSrc: { type: 'string', required: true }, //Image to be shown in the card on the Portfolio index page
    lead: { type: 'string', required: true },       //Lead introductory paragraph shown on the Portfolio item's page
    portfolioClient: { type: 'string' },            //Name of the Client
    portfolioType: { type: 'string' },              //Type of work e.g. `Print, Design, Web`
    portfolioHref: { type: 'string' },              //URL to an external resource e.g. the live website
    canonicalUrl: { type: 'string' },               //Canonical URL
  },
  computedFields: {
    ...computedFields,
    structuredData: {
      type: 'json',
      resolve: (doc) => ({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: doc.title,
        datePublished: doc.date,
        dateModified: doc.lastmod || doc.date,
        description: doc.summary,
        image: siteMetadata.socialBanner,
        url: `${siteMetadata.siteUrl}/${formatSlug(
          doc._raw.flattenedPath.replace(/^.+?(\/)/, '')
        )}`,
      }),
    },
  },
}))

export const Authors = defineDocumentType(() => ({
  name: 'Authors',
  filePathPattern: 'authors/**/*.mdx',
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    avatar: { type: 'string' },
    occupation: { type: 'string' },
    email: { type: 'string' },
    facebook: { type: 'string' },
    youtube: { type: 'string' },
    twitter: { type: 'string' },
    instagram: { type: 'string' },
    threads: { type: 'string' },
    mastodon: { type: 'string' },
    bluesky: { type: 'string' },
    keybase: { type: 'string' },
    github: { type: 'string' },
    linkedin: { type: 'string' },
    layout: { type: 'string' },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog, Portfolio, Authors],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [
      remarkExtractFrontmatter,
      convertInlineFootnotes,
      remarkGfm,
      remarkCodeTitles,
      remarkMath,
      remarkImgToJsx,
      remarkAlert,
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'prepend',
          headingProperties: {
            className: ['component-posts-article__title'],
          },
          content: rehypeAutolinkHeadingsIcon,
        },
      ],
      [rehypeCitation, { path: path.join(root, 'data'), linkCitations: true }],
      [rehypePrismPlus, { defaultLanguage: 'js', ignoreMissing: true }],
      rehypePresetMinify,
    ],
  },
  onSuccess: async (importData) => {
    const { allBlogs, allPortfolios } = await importData()
    createTagCount(allBlogs)
    createSearchIndexes(allBlogs, allPortfolios)
  },
})
