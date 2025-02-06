/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  //If internal link E.g. `/about/`
  if (isInternalLink) {
    return <Link className="break-words" href={href} {...rest} />
    //If an anchor link E.g. `#about`
  } else if (isAnchorLink) {
    return <a className="break-words" href={href} {...rest} />
    //Anything else consider as an external link, so open in new window/tab
  } else {
    return (
      <a className="break-words" target="_blank" rel="noopener noreferrer" href={href} {...rest} />
    )
  }
}

export default CustomLink
