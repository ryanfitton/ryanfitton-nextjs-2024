/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  const commonProps = {
    className: 'break-words',
    role: 'link',
    'aria-label': 'Anchor Link',
    href: href,
    ...rest,
  }

  //If internal link E.g. `/about/` or hastag link E.g. `#about`
  if (isInternalLink || isAnchorLink) {
    return <Link {...commonProps} />

    //Anything else consider as an external link, so open in new window/tab
  } else {
    return <a {...commonProps} target="_blank" rel="noopener noreferrer" />
  }
}

export default CustomLink
