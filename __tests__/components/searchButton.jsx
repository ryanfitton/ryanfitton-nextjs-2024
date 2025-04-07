import { render, screen } from '@testing-library/react'
import SearchButton from '@/components/SearchButton'
import siteMetadata from '@/data/siteMetadata'

// Mocking AlgoliaButton and KBarButton
jest.mock('pliny/search/AlgoliaButton', () => ({
  AlgoliaButton: ({ children }) => <button>{children}</button>,
}))
jest.mock('pliny/search/KBarButton', () => ({
  KBarButton: ({ children }) => <button>{children}</button>,
}))

// Mock siteMetadata for the tests
jest.mock('@/data/siteMetadata', () => ({
  search: {
    provider: 'algolia', // Change this to 'kbar' to test with KBarButton
  },
}))

describe('SearchButton', () => {
  it('Renders AlgoliaButton when provider is "algolia"', () => {
    // Render the SearchButton component
    const { container } = render(<SearchButton />)

    // Debug the output
    //screen.debug();

    // Check if the correct button is rendered
    const searchButton = screen.getByRole('button')
    expect(searchButton).toBeInTheDocument()

    // Check if the button contains the SVG icon (the search icon)
    const svgIcon = container.querySelector("button > svg");
    expect(svgIcon).toBeInTheDocument();
  })

  it('Renders KBarButton when provider is "kbar"', () => {
    // Change the mock to simulate the "kbar" provider
    siteMetadata.search.provider = 'kbar'

    // Render the SearchButton component
    const { container } = render(<SearchButton />)

    // Debug the output
    //screen.debug();

    // Check if the correct button is rendered
    const searchButton = screen.getByRole('button')
    expect(searchButton).toBeInTheDocument()

    // Check if the button contains the SVG icon (the search icon)
    const svgIcon = container.querySelector("button > svg");
    expect(svgIcon).toBeInTheDocument();
  })
})
