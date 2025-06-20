import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PageTitle from '@/components/PageTitle'

describe("PageTitle Component", () => {

    it("Test with all arguments passed", () => {
        
        const { container } = render(<PageTitle className="test-heading-class" headingSize="h3" heading="Test page title 1" />);

        // Debug the output
        //screen.debug();

        // Check if the container div exists
        const queryElement = container.querySelector("h3");
        expect(queryElement).toBeInTheDocument();

        // Check the text is in the link
        const titleElement = screen.getByText('Test page title 1');
        expect(titleElement).toBeInTheDocument();

        // Check if the element exists with correct attributes
        expect(titleElement).toHaveAttribute("class", "hero__title component-title test-heading-class");

        //Check Aria attributes exist and are correct
        expect(titleElement).toHaveAttribute("role", "heading");
        expect(titleElement).toHaveAttribute("aria-label", "Page Title for " + "Test page title 1");
    });

    it("Test with missing className", () => {
        
        const { container } = render(<PageTitle headingSize="h3" heading="Test page title 2" />);

        // Debug the output
        //screen.debug();

        // Check if the container div exists
        const queryElement = container.querySelector("h3");
        expect(queryElement).toBeInTheDocument();

        // Check the text is in the link
        const titleElement = screen.getByText('Test page title 2');
        expect(titleElement).toBeInTheDocument();

        // Check if the element exists with correct attributes
        expect(titleElement).toHaveAttribute("class", "hero__title component-title ");

        //Check Aria attributes exist and are correct
        expect(titleElement).toHaveAttribute("role", "heading");
        expect(titleElement).toHaveAttribute("aria-label", "Page Title for " + "Test page title 2");
    });

    it("Test with missing headingSize", () => {
        
        const { container } = render(<PageTitle heading="Test page title 3" />);

        // Debug the output
        //screen.debug();

        // Check if the container div exists
        const queryElement = container.querySelector("h1");
        expect(queryElement).toBeInTheDocument();

        // Check the text is in the link
        const titleElement = screen.getByText('Test page title 3');
        expect(titleElement).toBeInTheDocument();

        //Check Aria attributes exist and are correct
        expect(titleElement).toHaveAttribute("role", "heading");
        expect(titleElement).toHaveAttribute("aria-label", "Page Title for " + "Test page title 3");
    });
    
});