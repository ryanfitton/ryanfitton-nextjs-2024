import React from 'react'
import { render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '@/components/Header'

// Mock Next.js hooks
jest.mock('next/navigation', () => ({
    usePathname: jest.fn(),
}))

// Mock siteMetadata
jest.mock('@/data/siteMetadata', () => ({
    __esModule: true,
    default: {
        author: 'Test Author',
        headerTitle: 'Welcome to the Site',
        headerDescription: 'Explore the awesomeness',
        stickyNav: true,
        comments: true,
    },
}))

// Mock navLinks
jest.mock('@/data/navLinks', () => [
    { title: 'Blog', href: '/blog' },
    { title: 'Projects', href: '/projects' },
])

// Mock components
jest.mock('@/components/Link', () => ({ children, href, ...rest }) => (
    <a href={href} {...rest}>
        {children}
    </a>
))
jest.mock('@/components/Image', () => (props) => <img {...props} />)
jest.mock('@/components/PageTitle', () => ({ heading }) => <h1>{heading}</h1>)
jest.mock('@/components/MobileNav', () => () => <div data-testid="mobile-nav" />)
jest.mock('@/components/ThemeSwitch', () => () => <div data-testid="theme-switch" />)
jest.mock('@/components/SearchButton', () => () => <button>Search</button>)

// media-chrome is ESM-only – we mock components directly
jest.mock('media-chrome/react', () => ({
    MediaController: ({ children, ...props }) => <div {...props}>{children}</div>,
    MediaPosterImage: (props) => <img {...props} />,
}))

const mockUsePathname = require('next/navigation').usePathname

describe('Header component', () => {
    it('Renders homepage header with video and correct metadata', () => {
        mockUsePathname.mockReturnValue('/')

        const { container } = render(<Header />)

        // Debug the output
        //screen.debug();

        // Check header content
        expect(screen.getByRole('img', { name: 'Test Author' })).toBeInTheDocument()
        expect(screen.getByText('Welcome to the Site')).toBeInTheDocument()
        expect(screen.getByText('Explore the awesomeness')).toBeInTheDocument()

        // Hero video should be present
        const videoElement = container.querySelector("video");
        expect(videoElement).toBeInTheDocument();
        expect(screen.getByTestId('theme-switch')).toBeInTheDocument()
        expect(screen.getByTestId('mobile-nav')).toBeInTheDocument()

        // Check header content
        const heroElement = container.querySelector(".hero");
        expect(heroElement).toBeInTheDocument();
    })

    it('Renders a non-homepage header with title and subtitle', () => {
        mockUsePathname.mockReturnValue('/about/team')

        const { container } = render(<Header />)

        // Debug the output
        //screen.debug();

        // Check header content
        const heroElement = container.querySelector(".hero");
        expect(within(heroElement).getByText('About')).toBeInTheDocument()
        expect(within(heroElement).getByText('Team')).toBeInTheDocument()
        //expect(within(heroElement).queryByText('Team')).not.toBeInTheDocument()
        //expect(within(heroElement).queryByText('Team')).not.toBeInTheDocument()
    })

    it('Omits subtitle on Blog pages', () => {
        mockUsePathname.mockReturnValue('/blog/my-post')

        const { container } = render(<Header />)

        // Debug the output
        //screen.debug();

        // Check header content
        const heroElement = container.querySelector(".hero");
        expect(within(heroElement).getByText('Blog')).toBeInTheDocument()
        expect(within(heroElement).queryByText('My Post')).not.toBeInTheDocument()
    })
})
