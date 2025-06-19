import { render, screen } from '@testing-library/react'
import PortfolioListLayout from '@/layouts/PortfolioListLayout' // Adjust import path as necessary
//import { CoreContent } from 'pliny/utils/contentlayer'
//import { Portfolio } from 'contentlayer/generated'
import { usePathname } from 'next/navigation'

// Mocking the usePathname hook from next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

// Mocking the Card component
jest.mock('@/components/Card', () => ({
  __esModule: true,
  default: ({ title, description, imgSrc, href }) => (
    <div>
      <a href={href}>
        <img src={imgSrc} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </a>
    </div>
  ),
}))

// Mock data
const mockPosts = [
  {
    path: 'portfolio/portfolio-1',
    featuredImgSrc: '/images/portfolio-1.jpg',
    title: 'Portfolio 1',
    summary: 'This is the summary of Portfolio 1',
    draft: false,
  },
  {
    path: 'portfolio/portfolio-2',
    featuredImgSrc: '/images/portfolio-2.jpg',
    title: 'Portfolio 2',
    summary: 'This is the summary of Portfolio 2',
    draft: false,
  },
]

const mockPagination = {
  totalPages: 2,
  currentPage: 1,
}

usePathname.mockReturnValue('/portfolio')

describe('PortfolioListLayout', () => {
  it('Renders portfolio posts correctly', () => {
    render(<PortfolioListLayout posts={mockPosts} pagination={mockPagination} />)

    // Check if portfolio posts are rendered
    expect(screen.getByText('Portfolio 1')).toBeInTheDocument()
    expect(screen.getByText('Portfolio 2')).toBeInTheDocument()

    // Check if the summaries are rendered
    expect(screen.getByText('This is the summary of Portfolio 1')).toBeInTheDocument()
    expect(screen.getByText('This is the summary of Portfolio 2')).toBeInTheDocument()
  })

  it('Renders pagination with previous and next buttons', () => {
    render(<PortfolioListLayout posts={mockPosts} pagination={mockPagination} />)

    // Check if pagination is rendered
    expect(screen.getByText('1 of 2')).toBeInTheDocument()

    // Check if "Previous" and "Next" buttons are displayed
    expect(screen.getByText('Previous')).toBeInTheDocument()
    expect(screen.getByText('Next')).toBeInTheDocument()
  })

  it('Renders pagination correctly when on the first page', () => {
    const updatedPagination = { totalPages: 2, currentPage: 1 }
    render(<PortfolioListLayout posts={mockPosts} pagination={updatedPagination} />)

    // Check if the "Previous" button is disabled
    expect(screen.getByText('Previous')).toHaveClass('!cursor-auto !opacity-50')

    // Check if the "Next" button is enabled
    expect(screen.getByText('Next')).not.toHaveClass('!cursor-auto !opacity-50')
  })

  it('Renders pagination correctly when on the last page', () => {
    const updatedPagination = { totalPages: 2, currentPage: 2 }
    render(<PortfolioListLayout posts={mockPosts} pagination={updatedPagination} />)

    // Check if the "Next" button is disabled
    expect(screen.getByText('Next')).toHaveClass('!cursor-auto !opacity-50')

    // Check if the "Previous" button is enabled
    expect(screen.getByText('Previous')).not.toHaveClass('!cursor-auto !opacity-50')
  })

  it('Correctly navigates to portfolio post pages', () => {
    render(<PortfolioListLayout posts={mockPosts} pagination={mockPagination} />)

    // Check if portfolio titles are clickable and have the correct href
    const portfolioLink1 = screen.getByText('Portfolio 1').closest('a')
    expect(portfolioLink1).toHaveAttribute('href', '/portfolio/portfolio-1')

    const portfolioLink2 = screen.getByText('Portfolio 2').closest('a')
    expect(portfolioLink2).toHaveAttribute('href', '/portfolio/portfolio-2')
  })

  it('Checks elements have the correct ARIA attributes', () => {
    const { container } = render(<PortfolioListLayout posts={mockPosts} pagination={mockPagination} />)

    // Check `.site-container`
    const siteContainer = container.querySelector(".site-container");
    expect(siteContainer).toBeInTheDocument();
    expect(siteContainer).toHaveAttribute("role", "generic");
    expect(siteContainer).toHaveAttribute("aria-label", "Page Content Section");

    // Check `.component-posts-pagination__navigation`
    const postsPaginationNavigation = container.querySelector(".component-posts-pagination__navigation");
    expect(postsPaginationNavigation).toBeInTheDocument();
    expect(postsPaginationNavigation).toHaveAttribute("role", "navigation");
    expect(postsPaginationNavigation).toHaveAttribute("aria-label", "Pagination Navigation");

    // Check `button.component-posts-pagination__paginate`
    const postsPaginationButton = container.querySelector("button.component-posts-pagination__paginate");
    expect(postsPaginationButton).toBeInTheDocument();
    expect(postsPaginationButton).toHaveAttribute("role", "button");
    expect(postsPaginationButton.getAttribute("aria-label")).toContain("Page Button");

    // Check `a.component-posts-pagination__paginate`
    const postsPaginationAnchor = container.querySelector("a.component-posts-pagination__paginate");
    expect(postsPaginationAnchor).toBeInTheDocument();
    expect(postsPaginationAnchor).toHaveAttribute("role", "menuitem");
    expect(postsPaginationAnchor.getAttribute("aria-label")).toContain("Page Link");
  })
})
