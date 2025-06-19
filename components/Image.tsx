import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH

const Image = ({ src, ...rest }: ImageProps) => (
  <NextImage src={`${basePath || ''}${src}`} role="img"  aria-label="Content Image" {...rest} />
)

export default Image
