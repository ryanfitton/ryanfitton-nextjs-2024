import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
    {(href ? (
        <Link
            href={href}
            className="component-block component-block--outline-neutral component-block--rounded component-block--padding-small"
            aria-label={`Link to ${title}`}
          >
    ) : (
        <div className="component-block component-block--outline-neutral component-block--rounded component-block--padding-small">
    ))}

        <article className="component-posts-article">
            {(imgSrc ? (
                <Image
                    alt={title}
                    src={imgSrc}
                    className="component-posts-article__featured-image"
                    width={600}
                    height={400}
                />
            ))}
            
            <h2 className="component-posts-article__title">{title}</h2>

            {(description ? (
                <div className="component-posts-article__excerpt">
                    {description}
                </div>
            ))}
        </article>

    {(href ? (
        </link>
    ) : (
        </div>
    ))}
)

export default Card
