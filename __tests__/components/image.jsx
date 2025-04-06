import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Image from '@/components/Image'

describe("Image Component", () => {

    it("Renders the Image container with test data, check the returned result contains the required classnames", () => {
        const { container } = render(<Image
            src="https://placehold.co/600x400/EEE/31343C"
            alt="Test title"
            width="600"
            height="400"
            className="test-image-class"
            style={{
              objectFit: 'cover',
            }}
          />);

        // Debug the output
        //screen.debug();

        // Check if the container div exists
        const element = container.querySelector("img");
        expect(element).toBeInTheDocument();

        // Check if the element exists with correct attributes
        container.getElementsByClassName("test-image-class");
        expect(element).toHaveAttribute("alt", "Test title");
        expect(element).toHaveAttribute("decoding", "async");
        expect(element).toHaveAttribute("height", "400");
        expect(element).toHaveAttribute("loading", "lazy");
        expect(element).toHaveAttribute("src", "/_next/image?url=https%3A%2F%2Fplacehold.co%2F600x400%2FEEE%2F31343C&w=1200&q=75");
        expect(element).toHaveAttribute("srcset", "/_next/image?url=https%3A%2F%2Fplacehold.co%2F600x400%2FEEE%2F31343C&w=640&q=75 1x, /_next/image?url=https%3A%2F%2Fplacehold.co%2F600x400%2FEEE%2F31343C&w=1200&q=75 2x");
        expect(element).toHaveAttribute("style", "color: transparent; object-fit: cover;");
        expect(element).toHaveAttribute("width", "600");

    });
    
});