import siteMetadata from './data/siteMetadata'

// Load images via Cloudflare
// Ensure the domain is proxied through Cloudflare. Cloudflare will look for `cdn-cgi` and use this to process the image via their service worker.
// Docs: https://developers.cloudflare.com/images/transform-images
export default function cloudflareLoader({ src, width, quality, format }) {
  //If running locally return the local address
  if (siteMetadata.siteUrl.includes('localhost')) {
    return src

  //Else, run against the domain
  } else {
    //Set default params (Quality: 75 and Format: WebP conversion)
    const params = [`width=${width}`, `quality=${quality || 75}`, `format=${format || 'webp'}`]
    return `${siteMetadata.siteUrl}/cdn-cgi/image/${params.join(',')}${src}`
  }
}
