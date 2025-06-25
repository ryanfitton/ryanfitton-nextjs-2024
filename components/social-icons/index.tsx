import Link from '@/components/Link'
import { AnchorHTMLAttributes } from 'react'

import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  Twitter,
  X,
  Youtube,
  Mastodon,
  Threads,
  Instagram,
  Medium,
  Bluesky,
  BuyMeACoffee,
  PayPal,
  Keybase,
} from './icons'

const components = {
  facebook: Facebook,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
  x: X,
  youtube: Youtube,
  mastodon: Mastodon,
  threads: Threads,
  instagram: Instagram,
  medium: Medium,
  bluesky: Bluesky,
  buymeacoffee: BuyMeACoffee,
  paypal: PayPal,
  keybase: Keybase,
}

type SocialIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
}

const SocialIcon = ({
  kind,
  href,
  size = 8,
  ...rest
}: SocialIconProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  //If no Href value, return null
  if (!href) return null

  //Set Defaults
  const defaultProps = {
    role: 'menuitem',
    'aria-label': `${kind} Social Media Link`,
  }

  //Determine the correct SVG to display
  const SocialSvg = components[kind]
  return (
    <Link href={href} rel="me" {...defaultProps} {...rest}>
      <span className="sr-only">{kind}</span>
      <SocialSvg />
    </Link>
  )
}

export default SocialIcon
