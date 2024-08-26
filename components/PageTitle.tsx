import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return <h1 className={`${styles[props.className]}, 'hero__title component-title'`}>{children}</h1>
}