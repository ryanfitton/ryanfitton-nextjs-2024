import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="component-navbar component-navbar--icons">
          <div className="component-navbar__links">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
            <SocialIcon kind="buymeacoffee" href={siteMetadata.buymeacoffee} />
            <SocialIcon kind="github" href={siteMetadata.github} />
            <SocialIcon kind="keybase" href={siteMetadata.keybase} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
            <SocialIcon kind="x" href={siteMetadata.x} />
            <SocialIcon kind="facebook" href={siteMetadata.facebook} />
            <SocialIcon kind="youtube" href={siteMetadata.youtube} />
            <SocialIcon kind="mastodon" href={siteMetadata.mastodon} />
            <SocialIcon kind="bluesky" href={siteMetadata.bluesky} />
            <SocialIcon kind="threads" href={siteMetadata.threads} />
            <SocialIcon kind="instagram" href={siteMetadata.instagram} />
            <SocialIcon kind="medium" href={siteMetadata.medium} />
          </div>
        </div>

        <div className="component-navbar component-navbar--footer">
          <div className="component-navbar__links">
            <Link href="/about/">About</Link>
            <Link href="/colophon/">Colophon</Link>
            <Link href="/policies/">Policies</Link>
            <Link href="https://links.ryanfitton.co.uk/">Links</Link>
            <Link href="/feed.xml">RSS Feed</Link>
            <Link href="https://status.ryanfitton.co.uk/">Status</Link>
          </div>
        </div>

        <div className="mt-2">
          <span>{`© ${new Date().getFullYear()}`}</span>{' '}
          <span><Link href="/">{siteMetadata.author}</Link>.</span>{' '}
          <span>All rights reserved. <Link href="/policies/">License</Link>.</span>
        </div>
      </div>
    </footer>
  )
}
