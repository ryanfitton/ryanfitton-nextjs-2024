'use client'

import { ReactNode } from 'react'

interface Props {
  className?: ReactNode
  headingSize?: string
  heading?: string
}
//https://stackoverflow.com/questions/33471880/dynamic-tag-name-in-react-jsx
export default function PageTitle({ className, headingSize, heading }: Props) {
  const CustomTag = `${headingSize ? headingSize : 'h1'}` as keyof HTMLElementTagNameMap

  return (
    <CustomTag className={`hero__title component-title ` + (className ? className : '')}>
      {heading}
    </CustomTag>
  )
}
