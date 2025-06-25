import Link from 'next/link'
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
  if (
    !href ||
    (kind === 'mail' && !/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(href))
  )
    return null

  //Set Defaults
  const defaultProps = {
    role: 'menuitem',
    'aria-label': `${kind} Social Media Link`,
  }

  const SocialSvg = components[kind]

  return (
    <Link href={href} rel="me" {...defaultProps} {...rest}>
      <span className="sr-only">{kind}</span>
      <SocialSvg />
    </Link>
  )
}

export default SocialIcon
