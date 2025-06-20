import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Comments from '@/components/Comments'


// Mock CommentsComponent from pliny/comments
jest.mock('pliny/comments', () => ({
  Comments: ({ commentsConfig, slug }) => (
    <div data-testid="mock-comments">
      {commentsConfig.provider} - {slug}
    </div>
  ),
}))

describe("Comments Component", () => {

  it('Renders CommentsComponent when comments are enabled', () => {
    const { container } = render(<Comments slug="test-post" />)

    //Check Aria attributes exist and are correct
    expect(container.firstChild).toHaveAttribute("role", "complementary");
    expect(container.firstChild).toHaveAttribute("aria-label", "Comments Section");

    // Debug the output
    //screen.debug();

    expect(screen.getByTestId('mock-comments')).toBeInTheDocument()
    expect(screen.getByText(/disqus/i)).toBeInTheDocument()
    expect(screen.getByText(/test-post/i)).toBeInTheDocument()
  })
  
});