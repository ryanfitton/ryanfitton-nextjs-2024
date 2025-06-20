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

        //Check Aria attributes exist and are correct on `footer`
        expect(element).toHaveAttribute("role", "contentinfo");
        expect(element).toHaveAttribute("aria-label", "Footer");

        // Check if the element exists with correct attributes
        expect(element).toHaveAttribute("class", "site-footer");
        container.getElementsByClassName(".site-container");

        //Check SVG icons are present
        const icons = element.querySelector(".component-navbar.component-navbar--icons .component-navbar__links svg");
        expect(icons).toBeInTheDocument();

        //Check links are present
        const links = element.querySelector(".component-navbar.component-navbar--footer .component-navbar__links a");
        expect(links).toBeInTheDocument();

        //Check Aria attributes exist and are correct on `.component-navbar--icons`
        const navbarIcon = container.querySelector(".component-navbar.component-navbar--icons");
        expect(navbarIcon).toHaveAttribute("role", "menubar");
        expect(navbarIcon).toHaveAttribute("aria-label", "Social Media Links Navigation");

        //Check Aria attributes exist and are correct on `.component-navbar__links`
        const navbarIconLinks = container.querySelector(".component-navbar.component-navbar--icons .component-navbar__links");
        expect(navbarIconLinks).toHaveAttribute("role", "navigation");
        expect(navbarIconLinks).toHaveAttribute("aria-label", "Social Media Links Navigation Menu");

        //Check Aria attributes exist and are correct on `.component-navbar--icons .component-navbar__links a`
        const navbarIconLink = container.querySelectorAll('.component-navbar.component-navbar--icons .component-navbar__links a');
        expect(navbarIconLink.length).toBeGreaterThan(0);
        navbarIconLink.forEach(iconLink => {
            expect(iconLink).toHaveAttribute("role", "menuitem");
            expect(iconLink.getAttribute("aria-label")).toContain("Social Media Link");
        });
        
        //Check Aria attributes exist and are correct on `.component-navbar--footer`
        const navbarFooter = container.querySelector(".component-navbar.component-navbar--footer");
        expect(navbarFooter).toHaveAttribute("role", "menubar");
        expect(navbarFooter).toHaveAttribute("aria-label", "Secondary Links Navigation");

        //Check Aria attributes exist and are correct on `.component-navbar__links`
        const navbarFooterLinks = container.querySelector(".component-navbar.component-navbar--footer .component-navbar__links");
        expect(navbarFooterLinks).toHaveAttribute("role", "navigation");
        expect(navbarFooterLinks).toHaveAttribute("aria-label", "Secondary Links Navigation Menu");

        //Check Aria attributes exist and are correct on `.component-navbar--footer .component-navbar__links a`
        const navbarFooterLink = container.querySelectorAll('.component-navbar.component-navbar--footer .component-navbar__links a');
        expect(navbarFooterLink.length).toBeGreaterThan(0);
        navbarFooterLink.forEach(iconLink => {
            expect(iconLink).toHaveAttribute("role", "menuitem");
            expect(iconLink.getAttribute("aria-label")).toContain("Secondary Navigation Link");
        });

        //Check Footnote is present
        const footnote = element.querySelector(".site-footer__footnote");
        expect(footnote).toBeInTheDocument();

        // Check for the copyright year inside the footnote
        const currentYear = new Date().getFullYear();
        expect(footnote).toHaveTextContent(`© ${currentYear}`);

        // Check for the All Rights Reserved text inside the footnote
        expect(footnote).toHaveTextContent(`All rights reserved. `);

        // Check for the author's name as a link inside the footnote
        const authorLink = footnote.querySelector('a[href="/"]');
        expect(authorLink).toBeInTheDocument();
        expect(authorLink).toHaveTextContent(siteMetadata.author);
        expect(authorLink).toHaveAttribute("role", "link");
        expect(authorLink).toHaveAttribute("aria-label", "Anchor Link");

        // Check for the policies as a link inside the footnote
        const policiesLink = footnote.querySelector('a[href="/policies"]');
        expect(policiesLink).toBeInTheDocument();
        expect(policiesLink).toHaveTextContent('License');
        expect(policiesLink).toHaveAttribute("role", "link");
        expect(policiesLink).toHaveAttribute("aria-label", "Anchor Link");
    });
    
});