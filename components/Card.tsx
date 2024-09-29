import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, imgSrcSet, href }) => {
  return (
    <Link
      href={href}
      aria-label={`Link to ${title}`}
      className="component-block component-block--outline-neutral component-block--rounded component-block--padding-small"
    >
      <article className="component-posts-article">
        <Image
          src={imgSrc}
          alt={title}
          srcSet={imgSrcSet}
          width="400"
          height="265"
          className="component-posts-article__featured-image"
        />

        <h2 className="component-posts-article__title">{title}</h2>

        <div className="component-posts-article__excerpt">{description}</div>
      </article>
    </Link>
  )
}

export default Card
