import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const {
    name,
    avatar,
    occupation,
    email,
    github,
    linkedin,
    twitter,
    facebook,
    youtube,
    mastodon,
    threads,
    instagram,
  } = content

  return (
    <>
      <section className="site-container">
        <div className="grid">
          <div className="col-span-full place-items-center pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}

            {children}

            <div className="component-navbar component-navbar--icons">
              <div className="component-navbar__links">
                <SocialIcon kind="mail" href={`mailto:${email}`} />
                <SocialIcon kind="github" href={github} />
                <SocialIcon kind="linkedin" href={linkedin} />
                <SocialIcon kind="twitter" href={twitter} />
                <SocialIcon kind="facebook" href={facebook} />
                <SocialIcon kind="youtube" href={youtube} />
                <SocialIcon kind="mastodon" href={mastodon} />
                <SocialIcon kind="threads" href={threads} />
                <SocialIcon kind="instagram" href={instagram} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
