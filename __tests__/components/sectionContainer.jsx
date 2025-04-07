import { render, screen } from '@testing-library/react'
import SectionContainer from '@/components/SectionContainer'

describe('SectionContainer', () => {
  it('Renders children correctly', () => {
    // Render SectionContainer with a sample child (like a div with some text)
    render(
      <SectionContainer>
        <div>Test Content</div>
      </SectionContainer>
    )

    // Debug the output
    //screen.debug();

    // Check if the child is rendered in the DOM
    const childElement = screen.getByText('Test Content')
    expect(childElement).toBeInTheDocument()
  })
})