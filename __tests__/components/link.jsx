import { getByText, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Link from '@/components/Link'

describe("Link Component", () => {

    it("Test with Internal Links", () => {
        
        const { container } = render(<Link href="/test-internal-link-path">Test Text</Link>);

        // Debug the output
        //screen.debug();

        // Check if the container div exists
        const queryElement = container.querySelector("a");
        expect(queryElement).toBeInTheDocument();

        // Check the text is in the link
        const linkElement = screen.getByText('Test Text');
        expect(linkElement).toBeInTheDocument();

        // Check if the element exists with correct attributes
        expect(linkElement).toHaveAttribute("class", "break-words");
        expect(linkElement).toHaveAttribute("href", "/test-internal-link-path");

        //Check if the element has the correct ARIA attributes
        expect(linkElement).toHaveAttribute("role", "link")
        expect(linkElement).toHaveAttribute("aria-label", "Anchor Link")
    });

    it("Test with Anchor Links", () => {
        
        const { container } = render(<Link href="#test-internal-link-path">Test Text</Link>);

        // Debug the output
        //screen.debug();

        // Check if the container div exists
        const queryElement = container.querySelector("a");
        expect(queryElement).toBeInTheDocument();

        // Check the text is in the link
        const linkElement = screen.getByText('Test Text');
        expect(linkElement).toBeInTheDocument();

        // Check if the element exists with correct attributes
        expect(linkElement).toHaveAttribute("class", "break-words");
        expect(linkElement).toHaveAttribute("href", "#test-internal-link-path");

        //Check if the element has the correct ARIA attributes
        expect(linkElement).toHaveAttribute("role", "link")
        expect(linkElement).toHaveAttribute("aria-label", "Anchor Link")
    });

    it("Test with Anchor Links", () => {
        
        const { container } = render(<Link href="https://test.com">Test Text</Link>);

        // Debug the output
        //screen.debug();

        // Check if the container div exists
        const queryElement = container.querySelector("a");
        expect(queryElement).toBeInTheDocument();

        // Check the text is in the link
        const linkElement = screen.getByText('Test Text');
        expect(linkElement).toBeInTheDocument();

        // Check if the element exists with correct attributes
        expect(linkElement).toHaveAttribute("class", "break-words");
        expect(linkElement).toHaveAttribute("href", "https://test.com");
        expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");
        expect(linkElement).toHaveAttribute("target", "_blank");

        //Check if the element has the correct ARIA attributes
        expect(linkElement).toHaveAttribute("role", "link")
        expect(linkElement).toHaveAttribute("aria-label", "Anchor Link")
    });
    
});