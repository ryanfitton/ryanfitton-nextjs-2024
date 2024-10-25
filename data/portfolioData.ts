interface Portfolio {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const portfolioData: Portfolio[] = [
  {
    title: 'Lorem Ipsum',
    description: `Lorem ipsum.`,
    imgSrc: '/static/img/bio/ryanfitton.jpg',
    href: '/blog/portfolio-test-1/',
  },
  {
    title: 'Lorem Ipsum',
    description: `Lorem ipsum.`,
    imgSrc: '/static/img/bio/ryanfitton.jpg',
    href: '/blog/portfolio-test-1/',
  },
  {
    title: 'Lorem Ipsum',
    description: `Lorem ipsum.`,
    imgSrc: '/static/img/bio/ryanfitton.jpg',
    href: '/blog/portfolio-test-1/',
  },
]

export default portfolioData
