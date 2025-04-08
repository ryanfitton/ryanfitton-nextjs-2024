import { render, screen } from '@testing-library/react'
import LayoutWrapper from '@/components/LayoutWrapper'

// Mock components to avoid rendering actual dependencies
jest.mock('@/components/Header', () => () => <div>Header</div>)
jest.mock('@/components/Footer', () => () => <div>Footer</div>)
jest.mock('@/components/SectionContainer', () => ({ children }) => <div>{children}</div>)

describe('LayoutWrapper', () => {
  it('Renders Header, Footer, and children', () => {
    // Render the LayoutWrapper with test children content
    render(
      <LayoutWrapper>
        <div>Test Child Content</div>
      </LayoutWrapper>
    )

    // Check if Header and Footer are rendered
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()

    // Check if children content is rendered
    expect(screen.getByText('Test Child Content')).toBeInTheDocument()
  })
})