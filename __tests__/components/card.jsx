import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from '@/components/Card'

describe("Card Component", () => {

    // Debug the output
    //screen.debug();

    it("Renders the Card container with test data, check the returned result contains the required classnames", () => {
        const { container } = render(<Card
            key="test-path"
            title="test-title"
            description="test-description"
            imgSrc="https://placehold.co/600x400/EEE/31343C"
            href={`/test-path`}
          />);

        // Check if the container div exists
        const element = container.querySelector(".component-block");
        expect(element).toBeInTheDocument();

        // Check if the element exists with correct attributes
        container.getElementsByClassName("component-block--outline-secondary");
        container.getElementsByClassName("component-block--rounded");
        container.getElementsByClassName("component-block--padding-small");

        container.getElementsByClassName("component-posts-article");
        container.getElementsByClassName("component-posts-article__featured-image");
        container.getElementsByClassName("component-posts-article__title");
        container.getElementsByClassName("component-posts-article__excerpt");
    });
    
});