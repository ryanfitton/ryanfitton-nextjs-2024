import '../css/app.scss'
//import 'remark-github-blockquote-alert/alert.css'

import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'

import { Red_Hat_Text, Brygada_1918 } from 'next/font/google'

const redHatText = Red_Hat_Text({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-redHatText',
})

const brygada1918 = Brygada_1918({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-brygada1918',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <html
      lang={siteMetadata.language}
      suppressHydrationWarning
      className={`${redHatText.variable} ${brygada1918.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Allow preconnect to Google APIs */}
        <link rel="preconnect" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="//fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload images (Logo and Video header poster) */}
        <link
          rel="preload"
          as="image"
          href={`${basePath}/cdn-cgi/image/width=256,quality=75,format=webp/static/img/logo.png`}
        />
        <link
          rel="preload"
          as="image"
          href={`${basePath}/cdn-cgi/image/width=640,quality=75,format=webp/static/img/logo.png`}
        />
        <link
          rel="preload"
          as="image"
          href={`${basePath}/cdn-cgi/image/width=640,quality=75,format=webp/static/img/logo.png`}
        />
        {/* Old image href={`${basePath}/cdn-cgi/image/quality=75,format=webp/static/img/home-header-bg@1.8x.jpg`} */}
        <link
          rel="preload"
          as="image"
          href={`${basePath}/cdn-cgi/image/fit=cover,width=800,height=1000,quality=75,format=webp/static/img/home-header-bg@1.8x.jpg`}
        />

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={`${basePath}/cdn-cgi/image/quality=75,format=webp/static/favicons/apple-touch-icon-152x152.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href={`${basePath}/cdn-cgi/image/quality=75,format=webp/static/favicons/apple-touch-icon-144x144.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={`${basePath}/cdn-cgi/image/quality=75,format=webp/static/favicons/apple-touch-icon-120x120.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href={`${basePath}/cdn-cgi/image/quality=75,format=webp/static/favicons/apple-touch-icon-114x114.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${basePath}/cdn-cgi/image/quality=75,format=webp/static/favicons/apple-touch-icon-76x76.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href={`${basePath}/cdn-cgi/image/quality=75,format=webp/static/favicons/apple-touch-icon-72x72.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href={`${basePath}/cdn-cgi/image/quality=75,format=webp/static/favicons/apple-touch-icon-57x57.png`}
        />
        <link
          rel="apple-touch-icon"
          href={`${basePath}/cdn-cgi/image/quality=75,format=webp/static/favicons/apple-touch-icon.png`}
        />
        <link rel="icon" type="image/ico" href={`${basePath}/static/favicons/favicon.ico`} />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`${basePath}/cdn-cgi/image/quality=75,format=webp/static/favicons/favicon-192x192.png`}
        />
        <meta
          name="msapplication-TileImage"
          content={`${basePath}/cdn-cgi/image/quality=75,format=webp/static/favicons/modern-ui-tile-icon-144x144.png`}
        />

        {/* General site Meta data */}
        <meta name="msapplication-TileColor" content="#af4c41" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        <link rel="manifest" href={`${basePath}/static/favicons/site.webmanifest`} />

        {/* Site RSS feed link */}
        <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />

        {/* Mastodon author attribution verification */}
        <meta name="fediverse:creator" content="@ryanfitton@mastodon.social" />

        {/* Google AdSense verification */}
        <meta name="google-adsense-account" content="ca-pub-3978227379460513" />
        <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3978227379460513"
            crossOrigin="anonymous"
          ></script>
      </head>

      <body>
        <ThemeProviders>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />

          <SectionContainer>
            <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
              <Header />
              <main className="site-main">{children}</main>
            </SearchProvider>

            <Footer />
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  )
}
