import siteMetadata from '@/data/siteMetadata'
import PageTitle from '@/components/PageTitle'
import navLinks from '@/data/navLinks'
import Link from './Link'
import Image from './Image'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="site-header">
      <div className="xl:site-container flex justify-between">
        {/* Logo */}
        <Link href="/" className="site-header__logo" aria-label={siteMetadata.author}>
          <Image
            src="/static/img/logo@1x.png"
            alt={siteMetadata.author}
            srcSet="/static/img/logo@1x.png @1x, /static/img/logo@2x.png @2x"
            width="150"
            height="34"
          />
        </Link>

        {/* Nav */}
        <div className="component-navbar component-navbar--header">
          <div className="component-navbar__links">
            {navLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link key={link.title} href={link.href}>
                  {link.title}
                </Link>
              ))}
          </div>

          <SearchButton />

          <ThemeSwitch />

          <MobileNav />
        </div>
      </div>

      {/* Video hero Start */}
      <div className="hero hero--video">
        <div className="hero__container site-container">
          <div className="hero__content">
            <PageTitle>{siteMetadata.headerTitle}</PageTitle>
            <span>{siteMetadata.headerDescription}</span>
          </div>
        </div>

        <video
          autoPlay
          loop
          muted
          className="hero__video-object"
          poster="/static/img/home-header-bg-2000px@1x.jpg"
        >
          <source src="videos/home-header-video-15fps.webm" type="video/webm" />
          Your browser does not support the HTML5 video tag.
        </video>
      </div>
      {/* Video hero End */}


      {/* Page hero Start */}
      <div className="hero hero--page">
        <div className="hero__container site-container">
          <div className="hero__content">
            <PageTitle>TITLE GOES HERE</PageTitle>
            <PageTitle className="component-title--sub">TITLE SUBTITLE</PageTitle>
          </div>
        </div>
      </div>
      {/* Page hero End */}
    </header>
  )
}

export default Header
