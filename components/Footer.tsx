import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo" aria-label="Page Content Section">
      <div className="site-container">
        <div
          className="component-navbar component-navbar--icons"
          role="menubar"
          aria-label="Social Media Links Navigation"
        >
          <nav
            className="component-navbar__links"
            role="navigation"
            aria-label="Social Media Links Navigation Menu"
          >
            <SocialIcon
              kind="mail"
              href={`mailto:${siteMetadata.email}`}
              role="menuitem"
              aria-label="Email Social Media Link"
            />
            <SocialIcon
              kind="buymeacoffee"
              href={siteMetadata.buymeacoffee}
              role="menuitem"
              aria-label="Buy Me A Coffee Social Media Link"
            />
            <SocialIcon
              kind="github"
              href={siteMetadata.github}
              role="menuitem"
              aria-label="Github ocial Media Link"
            />
            <SocialIcon
              kind="keybase"
              href={siteMetadata.keybase}
              role="menuitem"
              aria-label="Keybase Social Media Link"
            />
            <SocialIcon
              kind="linkedin"
              href={siteMetadata.linkedin}
              role="menuitem"
              aria-label="LinkedIn Social Media Link"
            />
            <SocialIcon
              kind="x"
              href={siteMetadata.x}
              role="menuitem"
              aria-label="X Social Media Link"
            />
            <SocialIcon
              kind="facebook"
              href={siteMetadata.facebook}
              role="menuitem"
              aria-label="Facebook Social Media Link"
            />
            <SocialIcon
              kind="youtube"
              href={siteMetadata.youtube}
              role="menuitem"
              aria-label="YouTube Social Media Link"
            />
            <SocialIcon
              kind="mastodon"
              href={siteMetadata.mastodon}
              role="menuitem"
              aria-label="Mastodon Social Media Link"
            />
            <SocialIcon
              kind="bluesky"
              href={siteMetadata.bluesky}
              role="menuitem"
              aria-label="Bluesky Social Media Link"
            />
            <SocialIcon
              kind="threads"
              href={siteMetadata.threads}
              role="menuitem"
              aria-label="Threads Social Media Link"
            />
            <SocialIcon
              kind="instagram"
              href={siteMetadata.instagram}
              role="menuitem"
              aria-label="Instagram Social Media Link"
            />
            <SocialIcon
              kind="medium"
              href={siteMetadata.medium}
              role="menuitem"
              aria-label="Medium Social Media Link"
            />
          </nav>
        </div>

        <div
          className="component-navbar component-navbar--footer"
          role="menubar"
          aria-label="Secondary Links Navigation"
        >
          <nav
            className="component-navbar__links"
            role="navigation"
            aria-label="Secondary Links Navigation Menu"
          >
            <Link href="/about/" role="menuitem" aria-label="About Secondary Navigation Link">
              About
            </Link>
            <Link href="/colophon/" role="menuitem" aria-label="Colophon Secondary Navigation Link">
              Colophon
            </Link>
            <Link href="/policies/" role="menuitem" aria-label="Policies Secondary Navigation Link">
              Policies
            </Link>
            <Link
              href="https://links.ryanfitton.co.uk/"
              role="menuitem"
              aria-label="Links Profile Secondary Navigation Link"
            >
              Links
            </Link>
            <Link href="/feed.xml" role="menuitem" aria-label="RSS Feed Secondary Navigation Link">
              RSS Feed
            </Link>
            <Link
              href="https://status.ryanfitton.co.uk/"
              role="menuitem"
              aria-label="Status Page Secondary Navigation Link"
            >
              Status
            </Link>
          </nav>
        </div>

        <div className="mt-2">
          <span>{`© ${new Date().getFullYear()}`}</span>{' '}
          <span>
            <Link href="/">{siteMetadata.author}</Link>.
          </span>{' '}
          <span>
            All rights reserved. <Link href="/policies/">License</Link>.
          </span>
        </div>
      </div>
    </footer>
  )
}
