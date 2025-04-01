const { withContentlayer } = require('next-contentlayer2')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// You might need to insert additional domains in script-src if you are using external services
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.disqus.com https://*.googlesyndication.com 'nonce-randomNonceValue';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net;
  frame-src https://www.youtube.com https://*.disqus.com https://*.googlesyndication.com;
  frame-ancestors 'self' https://*.disqus.com;
  img-src 'self' https://trusted-image-cdn.com blob: data:;
  media-src 'self' https://*.s3.amazonaws.com;
  connect-src 'self' https://www.google-analytics.com https://*.disqus.com;
  font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net;
  upgrade-insecure-requests;
`;

const headers = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'geolocation=()',
  },
  // https://simonhearne.com/2022/caching-header-best-practices/
  {
    key: 'Cache-Control',
    value: 'max-age=31536000, immutable',
  },
]

const output = process.env.EXPORT ? 'export' : undefined
const basePath = process.env.BASE_PATH || undefined
const unoptimized = process.env.UNOPTIMIZED ? true : false

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = () => {
  const plugins = [withContentlayer, withBundleAnalyzer]
  return plugins.reduce((acc, next) => next(acc), {
    output: output,
    basePath: basePath,
    trailingSlash: true,
    skipTrailingSlashRedirect: false,
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    eslint: {
      dirs: ['app', 'components', 'layouts', 'scripts'],
    },
    images: {
      loader: 'custom',
      loaderFile: './cloudflare-image-loader.ts',
      deviceSizes: [640, 750, 828, 1080, 1200],
      imageSizes: [32, 64, 96, 128, 256],
      domains: ['localhost', 'ryanfitton.co.uk'],
      unoptimized: unoptimized,
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: headers,
        },
      ]
    },
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })

      return config
    },
  })
}
