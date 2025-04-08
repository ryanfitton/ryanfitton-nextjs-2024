import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'

describe("Footer Component", () => {

    it("Renders the Footer container with test data, check the returned result contains the required classnames", () => {
        const { container } = render(<Footer />);

        // Debug the output
        //screen.debug();

        // Check if the container div exists
        const element = container.querySelector("footer");
        expect(element).toBeInTheDocument();

        // Check if the element exists with correct attributes
        expect(element).toHaveAttribute("class", "site-footer");
        container.getElementsByClassName(".site-container");

        //Check SVG icons are present
        const icons = element.querySelector(".component-navbar.component-navbar--icons .component-navbar__links svg");
        expect(icons).toBeInTheDocument();

        //Check links are present
        const links = element.querySelector(".component-navbar.component-navbar--footer .component-navbar__links a");
        expect(links).toBeInTheDocument();

        //Check for the copyright year
        const currentYear = new Date().getFullYear();
        expect(screen.getByText(`© ${currentYear}`)).toBeInTheDocument();

        // Check for the author's name as a link
        const authorLink = screen.getByRole("link", { name: siteMetadata.author });
        expect(authorLink).toHaveAttribute("href", "/");
    });
    
});