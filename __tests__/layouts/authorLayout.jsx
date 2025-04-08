import { render, screen } from '@testing-library/react'
import AuthorLayout from '@/layouts/AuthorLayout'
//import SocialIcon from '@/components/social-icons'
//import { Authors } from 'contentlayer/generated'

// Mock the Image component
jest.mock('@/components/Image', () => ({
  __esModule: true,
  default: ({ src, alt, className, width, height }) => (
    <img src={src} alt={alt} className={className} width={width} height={height} />
  ),
}))

// Mock the SocialIcon component
jest.mock('@/components/social-icons', () => ({
  __esModule: true,
  default: ({ kind, href }) => <a href={href} data-testid={`social-icon-${kind}`}>{kind}</a>,
}))

const mockAuthorContent = {
  name: 'John Doe',
  avatar: '/images/john-doe.jpg',
  occupation: 'Software Engineer',
  email: 'john.doe@example.com',
  github: 'https://github.com/johndoe',
  keybase: 'https://keybase.io/johndoe',
  linkedin: 'https://linkedin.com/in/johndoe',
  twitter: 'https://twitter.com/johndoe',
  x: 'https://x.com/johndoe',
  facebook: 'https://facebook.com/johndoe',
  youtube: 'https://youtube.com/johndoe',
  mastodon: 'https://mastodon.social/@johndoe',
  bluesky: 'https://bluesky.com/johndoe',
  threads: 'https://threads.net/johndoe',
  instagram: 'https://instagram.com/johndoe',
  medium: 'https://medium.com/@johndoe',
};


describe('AuthorLayout', () => {
  it('Renders author details correctly', () => {
    render(<AuthorLayout content={mockAuthorContent}>Author bio content goes here</AuthorLayout>)

    // Check if the author's name and occupation are rendered
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Software Engineer')).toBeInTheDocument()

    // Check if the avatar image is rendered
    const avatarImage = screen.getByAltText('John Doe')
    expect(avatarImage).toBeInTheDocument()
    expect(avatarImage).toHaveAttribute('src', '/images/john-doe.jpg')

    // Check if the social icons are rendered
    expect(screen.getByTestId('social-icon-mail')).toHaveAttribute('href', 'mailto:john.doe@example.com')
    expect(screen.getByTestId('social-icon-github')).toHaveAttribute('href', 'https://github.com/johndoe')
    expect(screen.getByTestId('social-icon-linkedin')).toHaveAttribute('href', 'https://linkedin.com/in/johndoe')
    expect(screen.getByTestId('social-icon-twitter')).toHaveAttribute('href', 'https://twitter.com/johndoe')
    expect(screen.getByTestId('social-icon-instagram')).toHaveAttribute('href', 'https://instagram.com/johndoe')
    expect(screen.getByTestId('social-icon-medium')).toHaveAttribute('href', 'https://medium.com/@johndoe')

    // Check if the children are rendered
    expect(screen.getByText('Author bio content goes here')).toBeInTheDocument()
  })

  it('Does not render avatar if avatar is not provided', () => {
    const authorWithoutAvatar = { ...mockAuthorContent, avatar: null }

    render(<AuthorLayout content={authorWithoutAvatar}>No avatar content</AuthorLayout>)

    // Check that the avatar is not rendered
    const avatarImage = screen.queryByAltText('John Doe')
    expect(avatarImage).toBeNull()
  })

  it('Renders social icons even when some are missing', () => {
    const authorWithMissingSocials = {
      ...mockAuthorContent,
      twitter: '', // Removing twitter for testing
    }

    render(<AuthorLayout content={authorWithMissingSocials}>Author content</AuthorLayout>)

    // Check that the other social icons are rendered
    expect(screen.getByTestId('social-icon-mail')).toHaveAttribute('href', 'mailto:john.doe@example.com')
    expect(screen.getByTestId('social-icon-github')).toHaveAttribute('href', 'https://github.com/johndoe')
    expect(screen.queryByTestId('social-icon-twitter')).toHaveAttribute('href', '') // Twitter is missing
  })
})
