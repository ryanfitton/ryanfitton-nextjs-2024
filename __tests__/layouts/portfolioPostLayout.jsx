import { render, screen } from '@testing-library/react'
import PortfolioPostLayout from '@/layouts/PortfolioPostLayout'
import '@testing-library/jest-dom'
import siteMetadata from '@/data/siteMetadata'
//import { CoreContent } from 'pliny/utils/contentlayer'

describe('PortfolioPostLayout', () => {
  const mockContent = {
    title: 'Sample Portfolio Post',
    date: '2025-04-01T00:00:00.000Z',
    portfolioClient: 'Client Name',
    portfolioType: 'Web Development',
    portfolioHref: 'https://example.com',
    lead: 'This is the lead of the portfolio post.',
    draft: false,
    path: 'sample-portfolio-post',
    slug: 'sample-portfolio-post',
    _raw: {},
  }

  it('Renders portfolio post content correctly', () => {
    render(<PortfolioPostLayout content={mockContent}><div>Child Content</div></PortfolioPostLayout>)

    // Check if title is rendered
    expect(screen.getByText('Sample Portfolio Post')).toBeInTheDocument()

    // Check if client, type, and date are rendered correctly
    expect(screen.getByText(/Client:/)).toBeInTheDocument()
    expect(screen.getByText('Client Name')).toBeInTheDocument()
    expect(screen.getByText(/Type:/)).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    
    // Date is rendered with the correct format
    const formattedDate = new Date(mockContent.date).toLocaleDateString(siteMetadata.locale, {
      year: 'numeric',
      month: 'long',
    })
    expect(screen.getByText(formattedDate)).toBeInTheDocument()

    // Check if lead text is rendered
    expect(screen.getByText('This is the lead of the portfolio post.')).toBeInTheDocument()

    // Check if the "Visit website" link is rendered when portfolioHref is available
    const visitLink = screen.getByText('Visit website')
    expect(visitLink).toBeInTheDocument()
    expect(visitLink.closest('a')).toHaveAttribute('href', 'https://example.com')

    // Check if children are rendered
    expect(screen.getByText('Child Content')).toBeInTheDocument()
  })

  it('Does not render "Visit website" link if portfolioHref is not provided', () => {
    const mockContentWithoutHref = { ...mockContent, portfolioHref: undefined }
    
    render(<PortfolioPostLayout content={mockContentWithoutHref}><div>Child Content</div></PortfolioPostLayout>)

    // Check that "Visit website" link is not rendered
    expect(screen.queryByText('Visit website')).not.toBeInTheDocument()
  })
})
