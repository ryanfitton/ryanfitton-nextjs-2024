/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

function encodeEmail(email: string) {
  // Replace each character with its HTML entity
  return email
    .split('')
    .map((char) => `&#${char.charCodeAt(0)};`)
    .join('')
}

const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')
  const isMailto = href && href.startsWith('mailto:')

  //If this is a `mailto:` link, encode the mailto href value to help prevent spam
  let encodedEmail: string | undefined = undefined
  if (isMailto && typeof href === 'string') {
    encodedEmail = encodeEmail(href.replace(/^mailto:/, '')) //Encode the email
    href = 'mailto:' + encodedEmail //Update the mailto link with the encoded version
  }

  //Common props to use between Link component or regular <a> anchor tag
  const commonProps = {
    className: 'break-words',
    role: 'link',
    'aria-label': 'Anchor Link',
    href: href,
    ...rest,
  }

  //If internal link E.g. `/about/` or hastag link E.g. `#about` return using the Link component.
  if (isInternalLink || isAnchorLink) {
    return <Link {...commonProps} />

    //Anything else consider as an external link incl. Mailto, so open in new window/tab. Return via a standard Anchor tag.
  } else {
    return (
      <a {...commonProps} target="_blank" rel="noopener noreferrer">
        {encodedEmail ? <span dangerouslySetInnerHTML={{ __html: encodedEmail }} /> : rest.children}
      </a>
    )
  }
}

export default CustomLink
