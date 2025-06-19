'use client' // This is a client component

import { usePathname } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import PageTitle from '@/components/PageTitle'
import navLinks from '@/data/navLinks'
import Link from './Link'
import Image from './Image'
import { MediaController, MediaPosterImage } from 'media-chrome/react'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

export default function Header() {
  const pathname = usePathname()
  const pathnameSplit = pathname.split('/')
  const basePath = pathnameSplit[1]

  //Default: Get the title and sub title from the URL
  const title = basePath.replace(/-/g, ' ').replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())
  let subTitle = pathnameSplit[2]
    ? pathnameSplit[2].replace(/-/g, ' ').replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())
    : ''

  //If this is a Blog or Portfolio page, we don't want a sub-title as this will be displayed in the body post instead
  if (pathname.startsWith('/blog/') || pathname.startsWith('/portfolio/')) {
    subTitle = ''
  }

  //Convert headings to uppercase - Not currently used, kept here for the future
  //const titleUpercase = basePath.toUpperCase()
  //const subTitleUpperCase = subTitle.toUpperCase()

  //Define default head class, and if sticky is enabled, then apply sticky variant
  let headerNavContainerClass = 'site-container site-container--header flex justify-between'
  if (siteMetadata.stickyNav) {
    headerNavContainerClass += ' site-container--sticky site-header--sticky'
  }

  return (
    <>
      <header
        className={`site-header ` + (pathname === '/' ? 'site-header--homepage' : '')}
        role="banner"
        aria-label="Header"
      >
        <div className={headerNavContainerClass} role="generic" aria-label="Header Navigation">
          {/* Logo */}
          <Link href="/" className="site-header__logo" aria-label={siteMetadata.author}>
            {/* Image dimensions should be 3x the size of the width/height */}
            <Image src="/static/img/logo.png" alt={siteMetadata.author} width="150" height="34" />
          </Link>

          {/* Nav */}
          <div
            className="component-navbar component-navbar--header"
            role="menubar"
            aria-label="Header Navigation Menu"
          >
            <nav
              className="component-navbar__links"
              role="navigation"
              aria-label="Header Navigation Menu Links"
            >
              {navLinks
                .filter((link) => link.href !== '/')
                .map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={
                      pathname.startsWith(link.href) ? 'component-navbar__link--current-page' : ''
                    }
                    role="menuitem"
                    aria-label={`Header Navigation Link to ${link.title}`}
                    aria-current={pathname.startsWith(link.href) ? 'page' : ''}
                  >
                    {link.title}
                  </Link>
                ))}
            </nav>

            <SearchButton />

            <ThemeSwitch />

            <MobileNav />
          </div>
        </div>

        {/* Is homepage (/ route) */}
        {pathname === '/' ? (
          <div className="hero hero--video">
            <div className="hero__container site-container">
              <div className="hero__content">
                <PageTitle heading={siteMetadata.headerTitle} />
                <span>{siteMetadata.headerDescription}</span>
              </div>
            </div>

            <MediaController className="hero__video-wrapper">
              <video
                slot="media"
                src="/static/vid/home-header-video-15fps.webm"
                preload="auto"
                autoPlay
                loop
                muted
                crossOrigin=""
                className="hero__video-object"
              ></video>
              {/* Old image src="/cdn-cgi/image/quality=35,format=webp/static/img/home-header-bg@1.8x.jpg" */}
              <MediaPosterImage
                slot="poster"
                src="/cdn-cgi/image/fit=cover,width=600,height=400,quality=35,format=webp/static/img/home-header-bg@1.8x.jpg"
                className="hero__video-poster"
              ></MediaPosterImage>
            </MediaController>
          </div>
        ) : (
          <div className="hero hero--page">
            <div className="hero__container site-container">
              <div className="hero__content">
                {title && subTitle ? (
                  <>
                    <PageTitle
                      heading={subTitle}
                      className={pathname === '/' ? 'component-title--homepage' : ''}
                    />
                    <PageTitle heading={title} headingSize="h3" className="component-title--sub" />
                  </>
                ) : (
                  <>
                    <PageTitle heading={title} className="component-title--homepage" />
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
