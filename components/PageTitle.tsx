import { ReactNode } from 'react'

interface Props {
  className: ReactNode,
  children: ReactNode
}

export default function PageTitle({ id, className, children }: Props) {
  return <h1 className={`hero__title component-title ` + (className ? (className) : '')}>{children}</h1>
}
