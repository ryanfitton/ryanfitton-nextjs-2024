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

    //Check Aria attributes exist and are correct on `.component-navbar__menu-btn`
    expect(menuButtonElement).toHaveAttribute("role", "button");
    expect(menuButtonElement).toHaveAttribute("aria-label", "Toggle Menu");

    // Wrap the state change and assertions in `act`
    act(() => {
      // Click the menu button to toggle the navigation
      fireEvent.click(menuButtonElement)
    })

    // Wait for the nav links and elements to appear after clicking
    await waitFor(() => {
      // Check if the nav links appear
      const homeLink = screen.getByText('Home')
      const aboutLink = screen.getByText('About')

      expect(homeLink).toBeInTheDocument()
      expect(aboutLink).toBeInTheDocument()

      //Check Aria attributes exist and are correct on `.component-navbar.component-navbar--header`
      const mobileMenuNavbar = document.body.querySelector(".component-navbar.component-navbar--header");
      expect(mobileMenuNavbar).toHaveAttribute("role", "dialog");
      expect(mobileMenuNavbar).toHaveAttribute("aria-label", "Mobile Navigation Dialog");

      //Check Aria attributes exist and are correct on `.navbar__menu-mobile button`
      const mobileMenuNavbarButton = document.body.querySelector(".component-navbar__menu-mobile button");
      expect(mobileMenuNavbarButton).toHaveAttribute("role", "button");
      expect(mobileMenuNavbarButton).toHaveAttribute("aria-label", "Toggle Menu");

      //Check Aria attributes exist and are correct on `.component-navbar__links.component-navbar__links--menu-mobile`
      const mobileMenuNavbarLinks = document.body.querySelector(".component-navbar__links.component-navbar__links--menu-mobile");
      expect(mobileMenuNavbarLinks).toHaveAttribute("role", "navigation");
      expect(mobileMenuNavbarLinks).toHaveAttribute("aria-label", "Mobile Navigation Links Menu");

      //Check Aria attributes exist and are correct on `.component-navbar__links.component-navbar__links--menu-mobile a`
      const navbarIconLink = document.body.querySelectorAll('.component-navbar__links.component-navbar__links--menu-mobile a');
      expect(navbarIconLink.length).toBeGreaterThan(0);
      navbarIconLink.forEach(iconLink => {
        expect(iconLink).toHaveAttribute("role", "menuitem");
        expect(iconLink.getAttribute("aria-label")).toContain("Mobile Navigation Link to");
      });
    });
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