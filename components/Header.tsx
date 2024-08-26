import siteMetadata from '@/data/siteMetadata'
import PageTitle from '@/components/PageTitle'
import navLinks from '@/data/navLinks'
import Link from './Link'
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
            src="images/logo@1x.png"
            alt={siteMetadata.author}
            srcset="images/logo@1x.png @1x, images/logo@2x.png @2x"
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

          <div
            hidden=""
            style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"
          ></div>
        </div>
      </div>

      {/* Video hero Start */}
      <div className="hero hero--video">
        <div className="hero__container site-container">
          <div className="hero__content">
            <PageTitle>{title}{siteMetadata.headerTitle}</PageTitle>
            <span>{siteMetadata.description}</span>
          </div>
        </div>

        <video
          autoPlay
          loop
          muted
          className="hero__video-object"
          poster="images/home-header-bg-2000px@1x.jpg"
        >
          <source src="videos/home-header-video-15fps.webm" type="video/webm" />
          Your browser does not support the HTML5 video tag.
        </video>
      </div>
      {/* Video hero End */}


      {/* Page hero Start */}
      <div class="hero hero--page">
        <div class="hero__container site-container">
          <div class="hero__content">
            <PageTitle>{title}</PageTitle>
            <PageTitle className="component-title--sub">{subtitle}</PageTitle>
          </div>
        </div>
      </div>
      {/* Page hero End */}
    </header>
  )
}

export default Header
