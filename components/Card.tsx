import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => {
  return (
    <Link
      href={href}
      aria-label={`Link to ${title}`}
      className="component-block component-block--outline-secondary component-block--rounded component-block--padding-small"
    >
      <article className="component-posts-article">
        <Image
          src={imgSrc}
          alt={title}
          width="400"
          height="265"
          className="component-posts-article__featured-image"
        />

        <h2 className="component-posts-article__title">{title}</h2>

        <div
          className="component-posts-article__excerpt"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </article>
    </Link>
  )
}

export default Card
