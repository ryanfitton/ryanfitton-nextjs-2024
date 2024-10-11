/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Ryan Fitton',
  author: 'Ryan Fitton',
  description: 'Ryan Fitton personal website',
  headerTitle: 'Ryan Fitton',
  headerDescription: 'Ryan Fitton',
  language: 'en-gb',
  siteUrl: 'https://ryanfitton.co.uk',
  siteRepo: 'https://github.com/ryanfitton/ryanfitton.co.uk',
  image: '/static/favicons/favicon-192x192.png',
  socialBanner: '/static/img/twitter-card.png',
  email: 'ryan@ryanfitton.co.uk',
  facebook: 'https://www.facebook.com/rfitton',
  youtube: 'https://www.youtube.com/channel/UCVXmGnJsInwJicCeqaZiZmQ',
  github: 'https://github.com/ryanfitton',
  twitter: 'https://x.com/ryanfitton',
  instagram: 'https://www.instagram.com/ryanfittonuk/',
  threads: 'https://www.threads.net',
  mastodon: 'https://mastodon.social/',
  linkedin: 'https://uk.linkedin.com/in/rfitton',
  locale: 'en-GB',
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-YLMTDYMQCC', 
    },
  },
  comment: {
    provider: 'disqus', // supported providers: `giscus`, `utterances`, `disqus`
    disqus: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: 'ryanfitton-co-uk',
    },
  },
  search: {
    provider: 'kbar', // `kbar` or `algolia`
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
}

module.exports = siteMetadata
