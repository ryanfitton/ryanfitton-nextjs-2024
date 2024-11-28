// Load images via Cloudflare
// Ensure the domain is proxied through Cloudflare. Cloudflare will look for `cdn-cgi` and use this to process the image via their service worker.
// Docs: https://developers.cloudflare.com/images/transform-images
export default function cloudflareLoader({ src, width, quality }) {
  /*
  //If running locally return the local address
  if (window.location.hostname == 'localhost') {
    return src
  //Else, run against the domain
  } else {
    const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto']
    return (
      location.protocol +
      '//' +
      window.location.hostname +
      `/cdn-cgi/image/${params.join(',')}${src}`
    )
  }
  */

  const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto']
  return `https://ryanfitton.co.uk/cdn-cgi/image/${params.join(',')}${src}`
}
