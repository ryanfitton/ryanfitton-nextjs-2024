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
            <SocialIcon kind="github" href={siteMetadata.github} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            <SocialIcon kind="facebook" href={siteMetadata.facebook} />
            <SocialIcon kind="youtube" href={siteMetadata.youtube} />
            <SocialIcon kind="mastodon" href={siteMetadata.mastodon} />
            <SocialIcon kind="threads" href={siteMetadata.threads} />
            <SocialIcon kind="instagram" href={siteMetadata.instagram} />
          </div>
        </div>

        <div className="component-navbar component-navbar--footer">
          <div className="component-navbar__links">
            <Link href="/about/">About</Link>
            <Link href="/colophon/">Colophon</Link>
            <Link href="/policies/">Cookie and Privacy policy</Link>
          </div>
        </div>

        <div className="mt-2">
          <span>
            {`© ${new Date().getFullYear()}`} <Link href="/">{siteMetadata.author}</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
