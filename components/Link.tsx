import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

//Converted from this WordPress function: https://developer.wordpress.org/reference/functions/antispambot/
function encodeEmail(email: string, hexEncoding = 0): string {
  let emailNoSpamAddress = ''

  for (let i = 0, len = email.length; i < len; i++) {
    // Randomly choose encoding method
    const j = Math.floor(Math.random() * (1 + hexEncoding + 1)) // 0, 1, or 2 if hexEncoding is 1

    if (j === 0) {
      emailNoSpamAddress += `&#${email.charCodeAt(i)};`
    } else if (j === 1) {
      emailNoSpamAddress += email[i]
    } else if (j === 2) {
      // Hex encoding, always two digits
      emailNoSpamAddress += '%' + email.charCodeAt(i).toString(16).padStart(2, '0')
    }
  }

  // Replace all '@' with its HTML entity
  return emailNoSpamAddress.replace(/@/g, '&#64;')
}

const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')
  const isMailto = href && href.startsWith('mailto:')

  //If this is a `mailto:` link, encode the email address to help prevent spam
  let anchorTextIsEmail: boolean | undefined = false,
    emailEncoded: string | undefined = undefined
  if (isMailto && typeof href === 'string') {
    const email = href.replace(/^mailto:/, '') //Strip the `mailto:` text
    emailEncoded = encodeEmail(email) //Encode the email

    //Update the Href value with the encoded email address
    href = 'mailto:' + emailEncoded

    //Check if the email address from this `mailto:` value is the same as the Anchor Text
    //If true set `anchorTextIsEmail` as true and set `rest.children` to use the encoded email address as the Anchor Text
    anchorTextIsEmail = email == rest.children ? true : false
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

    //Anything else consider as an external link incl. `mailto`, so open in new window/tab. Return via a standard Anchor tag.
  } else {
    return (
      <a {...commonProps} target="_blank" rel="noopener noreferrer">
        {anchorTextIsEmail && emailEncoded ? (
          <span dangerouslySetInnerHTML={{ __html: emailEncoded }} />
        ) : (
          rest.children
        )}
      </a>
    )
  }
}

export default CustomLink
