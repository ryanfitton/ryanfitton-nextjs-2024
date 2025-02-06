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
  keybase: Keybase,
}

type SocialIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
}

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (
    !href ||
    (kind === 'mail' && !/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(href))
  )
    return null

  const SocialSvg = components[kind]

  return (
    <a rel="me" href={href}>
      <span className="sr-only">{kind}</span>
      <SocialSvg />
    </a>
  )
}

export default SocialIcon
