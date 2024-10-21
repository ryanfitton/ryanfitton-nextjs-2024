'use client'
import { ReactNode, createElement } from 'react'

interface Props {
  className?: ReactNode
  headingSize?: string
  heading?: string
}
//https://stackoverflow.com/questions/33471880/dynamic-tag-name-in-react-jsx
export default function PageTitle({ className, headingSize, heading }: Props) {
  const CustomTag = `${headingSize ? headingSize : 'h1'}`

  return createElement(CustomTag, { className: className }, heading)
}
