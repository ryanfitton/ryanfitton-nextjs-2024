import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import MobileNav from '@/components/MobileNav'
import { usePathname } from 'next/navigation'

// Mock `usePathname` to simulate different paths
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

// Mock navLinks for testing
jest.mock('@/data/navLinks', () => [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
])

describe('MobileNav', () => {
  beforeEach(() => {
    // Reset pathname mock before each test
    usePathname.mockReturnValue('/')
  })

  it('Renders mobile navigation links correctly', async () => {
    const { container } = render(<MobileNav />)

    // Debug the output
    //screen.debug();

    // Check if the mobile menu button is rendered
    const menuButtonElement = container.querySelector(".component-navbar__menu-btn");
    expect(menuButtonElement).toBeInTheDocument();
    expect(menuButtonElement).toHaveAttribute("aria-label", "Toggle Menu");

    // Wrap the state change and assertions in `act`
    act(() => {
      // Click the menu button to toggle the navigation
      fireEvent.click(menuButtonElement)
    })

    // Check if the nav links appear
    const homeLink = screen.getByText('Home')
    const aboutLink = screen.getByText('About')

    expect(homeLink).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
  })

  it('Check click of menu button', async () => {
    const { container } = render(<MobileNav />)

    // Debug the output
    //screen.debug();

    // Mock the nav to be open
    const menuButtonElement = container.querySelector(".component-navbar__menu-btn");

    // Wrap the state change and assertions in `act`
    act(() => {
      // Click the menu button to toggle the navigation
      fireEvent.click(menuButtonElement)
    })
  })

  it('Check open / close of menu button', async () => {
    const { container } = render(<MobileNav />)

    // Debug the output
    //screen.debug();

    // Mock the nav to be closed initially
    const menuButtonElement = container.querySelector(".component-navbar__menu-btn");

    // Wrap the state change and assertions in `act`
    act(() => {
      // Open the menu first
      fireEvent.click(menuButtonElement)
    })

    // Wrap the state change and assertions in `act`
    act(() => {
      // Close the menu first
      fireEvent.click(menuButtonElement)
    })
  })
})