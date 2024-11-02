import {
  Mail,
  Github,
  Keybase,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  Instagram,
  Threads,
  Mastodon,
  Bluesky,
} from './icons'

const components = {
  mail: Mail,
  github: Github,
  keybase: Keybase,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  threads: Threads,
  mastodon: Mastodon,
  bluesky: Bluesky,
}

type SocialIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
}

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
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
