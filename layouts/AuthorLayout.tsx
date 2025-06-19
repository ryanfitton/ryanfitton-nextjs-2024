import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SectionContainer from '@/components/SectionContainer'
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
    buymeacoffee,
    keybase,
    linkedin,
    twitter,
    x,
    facebook,
    youtube,
    mastodon,
    bluesky,
    threads,
    instagram,
    medium,
  } = content

  return (
    <>
      <SectionContainer>
        <section className="site-container" role="section" aria-label="Page Content Section">
          <div className="grid">
            <div className="col-span-full justify-self-center md:col-span-4">
              {avatar && (
                <Image
                  src={avatar}
                  alt={name}
                  className="rounded-full md:mt-8"
                  width={192}
                  height={192}
                />
              )}
            </div>

            <div className="col-span-full md:col-span-8">
              <h2
                className="component-title component-title--main"
                role="heading"
                aria-label={`${name} Heading`}
              >
                {name}
              </h2>
              <p className="lead">{occupation}</p>

              {children}

              <div className="component-navbar component-navbar--icons">
                <div className="component-navbar__links">
                  <SocialIcon kind="mail" href={`mailto:${email}`} />
                  <SocialIcon kind="buymeacoffee" href={buymeacoffee} />
                  <SocialIcon kind="github" href={github} />
                  <SocialIcon kind="keybase" href={keybase} />
                  <SocialIcon kind="linkedin" href={linkedin} />
                  <SocialIcon kind="twitter" href={twitter} />
                  <SocialIcon kind="x" href={x} />
                  <SocialIcon kind="facebook" href={facebook} />
                  <SocialIcon kind="youtube" href={youtube} />
                  <SocialIcon kind="mastodon" href={mastodon} />
                  <SocialIcon kind="bluesky" href={bluesky} />
                  <SocialIcon kind="threads" href={threads} />
                  <SocialIcon kind="instagram" href={instagram} />
                  <SocialIcon kind="medium" href={medium} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionContainer>
    </>
  )
}
