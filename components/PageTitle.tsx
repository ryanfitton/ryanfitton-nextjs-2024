import { ReactNode } from 'react'

interface Props {
  className: ReactNode,
  headingSize: string,
  children: ReactNode
}

export default function PageTitle({ id, className, children, headingSize }: Props) {
  const CustomTag = `${(headingSize ? headingSize : 'h1' )}`;

  return (
    <CustomTag className={`hero__title component-title ` + (className ? (className) : '')}>{children}</CustomTag>
  )
}
