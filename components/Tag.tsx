import Link from 'next/link'
import { slug as slugger } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return <Link href={`/tags/${slugger(text)}`}>{text.split(' ').join('-')}</Link>
}

export default Tag
