interface Portfolio {
  title: string
  description: string
  imgSrcSet: string
  href?: string
  imgSrc?: string
}

const portfolioData: Portfolio[] = [
  {
    title: 'Lorem Ipsum',
    description: `Lorem ipsum.`,
    imgSrc: '/static/img/bio/ryan-fitton-2014-august@1x.jpg',
    imgSrcSet:
      '/static/img/bio/ryan-fitton-2014-august@1x.jpg @1x, /static/img/bio/ryan-fitton-2014-august@2x.jpg @2x',
    href: '/blog/portfolio-test-1/',
  },
  {
    title: 'Lorem Ipsum',
    description: `Lorem ipsum.`,
    imgSrc: '/static/img/bio/ryan-fitton-2014-august@1x.jpg',
    imgSrcSet:
      '/static/img/bio/ryan-fitton-2014-august@1x.jpg @1x, /static/img/bio/ryan-fitton-2014-august@2x.jpg @2x',
    href: '/blog/portfolio-test-1/',
  },
  {
    title: 'Lorem Ipsum',
    description: `Lorem ipsum.`,
    imgSrc: '/static/img/bio/ryan-fitton-2014-august@1x.jpg',
    imgSrcSet:
      '/static/img/bio/ryan-fitton-2014-august@1x.jpg @1x, /static/img/bio/ryan-fitton-2014-august@2x.jpg @2x',
    href: '/blog/portfolio-test-1/',
  },
]

export default portfolioData
