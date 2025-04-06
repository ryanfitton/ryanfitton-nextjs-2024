import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Facebook, Github, Linkedin, Mail, Twitter, X, Youtube, Mastodon, Threads, Instagram, Medium, Bluesky, Keybase } from "@/components/social-icons/icons";
import SocialIcon from '@/components/social-icons'


describe("Facebook Icon Component", () => {

    it("Renders without crashing", () => {
        render(<Facebook />);
        expect(screen.getByTitle("Facebook")).toBeInTheDocument();
    });
    
    // Debug the output
    //screen.debug();
    
    it("Has the correct SVG properties", () => {
        const { container } = render(<Facebook />);
        const svgElement = container.querySelector("svg");

        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

    it("Renders Facebook icon with props", () => {
        const { container } = render(<SocialIcon kind="facebook" href={`https://test.com`} />);

        // Ensure the anchor tag is rendered with the correct href
        const linkElement = screen.getByRole("link");
        expect(linkElement).toHaveAttribute("href", "https://test.com");
        expect(linkElement).toHaveAttribute("rel", "me");

        // Ensure the sr-only span exists
        expect(screen.getByText("facebook")).toBeInTheDocument();

        // Ensure the SVG exists 
        const svgElement = container.querySelector("svg");
        expect(svgElement).toBeInTheDocument();
        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

});

describe("Github Icon Component", () => {

    it("Renders without crashing", () => {
        render(<Github />);
        expect(screen.getByTitle("Github")).toBeInTheDocument();
    });
    
    // Debug the output
    //screen.debug();
    
    it("Has the correct SVG properties", () => {
        const { container } = render(<Github />);
        const svgElement = container.querySelector("svg");

        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

    it("Renders Github icon with props", () => {
        const { container } = render(<SocialIcon kind="github" href={`https://test.com`} />);

        // Ensure the anchor tag is rendered with the correct href
        const linkElement = screen.getByRole("link");
        expect(linkElement).toHaveAttribute("href", "https://test.com");
        expect(linkElement).toHaveAttribute("rel", "me");

        // Ensure the sr-only span exists
        expect(screen.getByText("github")).toBeInTheDocument();

        // Ensure the SVG exists 
        const svgElement = container.querySelector("svg");
        expect(svgElement).toBeInTheDocument();
        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

});

describe("Linkedin Icon Component", () => {

    it("Renders without crashing", () => {
        render(<Linkedin />);
        expect(screen.getByTitle("Linkedin")).toBeInTheDocument();
    });
    
    // Debug the output
    //screen.debug();
    
    it("Has the correct SVG properties", () => {
        const { container } = render(<Linkedin />);
        const svgElement = container.querySelector("svg");

        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

    it("Renders LinkedIn icon with props", () => {
        const { container } = render(<SocialIcon kind="linkedin" href={`https://test.com`} />);

        // Ensure the anchor tag is rendered with the correct href
        const linkElement = screen.getByRole("link");
        expect(linkElement).toHaveAttribute("href", "https://test.com");
        expect(linkElement).toHaveAttribute("rel", "me");

        // Ensure the sr-only span exists
        expect(screen.getByText("linkedin")).toBeInTheDocument();

        // Ensure the SVG exists 
        const svgElement = container.querySelector("svg");
        expect(svgElement).toBeInTheDocument();
        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

});

describe("Mail Icon Component", () => {

    it("Renders without crashing", () => {
        render(<Mail />);
        expect(screen.getByTitle("Mail")).toBeInTheDocument();
    });
    
    // Debug the output
    //screen.debug();
    
    it("Has the correct SVG properties", () => {
        const { container } = render(<Mail />);
        const svgElement = container.querySelector("svg");
        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 20 20");
    });

    it("Renders Mail icon with props", () => {
        const { container } = render(<SocialIcon kind="mail" href={`mailto:test@test.com`} />);

        // Ensure the anchor tag is rendered with the correct href
        const linkElement = screen.getByRole("link");
        expect(linkElement).toHaveAttribute("href", "mailto:test@test.com");
        expect(linkElement).toHaveAttribute("rel", "me");

        // Ensure the sr-only span exists
        expect(screen.getByText("mail")).toBeInTheDocument();

        // Ensure the SVG exists 
        const svgElement = container.querySelector("svg");
        expect(svgElement).toBeInTheDocument();
        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 20 20");
    });

});

describe("Twitter Icon Component", () => {

    it("Renders without crashing", () => {
        render(<Twitter />);
        expect(screen.getByTitle("Twitter")).toBeInTheDocument();
    });
    
    // Debug the output
    //screen.debug();
    
    it("Has the correct SVG properties", () => {
        const { container } = render(<Twitter />);
        const svgElement = container.querySelector("svg");

        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

    it("Renders Twitter icon with props", () => {
        const { container } = render(<SocialIcon kind="twitter" href={`https://test.com`} />);

        // Ensure the anchor tag is rendered with the correct href
        const linkElement = screen.getByRole("link");
        expect(linkElement).toHaveAttribute("href", "https://test.com");
        expect(linkElement).toHaveAttribute("rel", "me");

        // Ensure the sr-only span exists
        expect(screen.getByText("twitter")).toBeInTheDocument();

        // Ensure the SVG exists 
        const svgElement = container.querySelector("svg");
        expect(svgElement).toBeInTheDocument();
        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

});

describe("X Icon Component", () => {

    it("Renders without crashing", () => {
        render(<X />);
        expect(screen.getByTitle("X")).toBeInTheDocument();
    });
    
    // Debug the output
    //screen.debug();
    
    it("Has the correct SVG properties", () => {
        const { container } = render(<X />);
        const svgElement = container.querySelector("svg");

        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

    it("Renders X icon with props", () => {
        const { container } = render(<SocialIcon kind="x" href={`https://test.com`} />);

        // Ensure the anchor tag is rendered with the correct href
        const linkElement = screen.getByRole("link");
        expect(linkElement).toHaveAttribute("href", "https://test.com");
        expect(linkElement).toHaveAttribute("rel", "me");

        // Ensure the sr-only span exists
        expect(screen.getByText("x")).toBeInTheDocument();

        // Ensure the SVG exists 
        const svgElement = container.querySelector("svg");
        expect(svgElement).toBeInTheDocument();
        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

});

describe("Youtube Icon Component", () => {

    it("Renders without crashing", () => {
        render(<Youtube />);
        expect(screen.getByTitle("Youtube")).toBeInTheDocument();
    });
    
    // Debug the output
    //screen.debug();
    
    it("Has the correct SVG properties", () => {
        const { container } = render(<Youtube />);
        const svgElement = container.querySelector("svg");

        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

    it("Renders YouTube icon with props", () => {
        const { container } = render(<SocialIcon kind="youtube" href={`https://test.com`} />);

        // Ensure the anchor tag is rendered with the correct href
        const linkElement = screen.getByRole("link");
        expect(linkElement).toHaveAttribute("href", "https://test.com");
        expect(linkElement).toHaveAttribute("rel", "me");

        // Ensure the sr-only span exists
        expect(screen.getByText("youtube")).toBeInTheDocument();

        // Ensure the SVG exists 
        const svgElement = container.querySelector("svg");
        expect(svgElement).toBeInTheDocument();
        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

});

describe("Mastodon Icon Component", () => {

    it("Renders without crashing", () => {
        render(<Mastodon />);
        expect(screen.getByTitle("Mastodon")).toBeInTheDocument();
    });
    
    // Debug the output
    //screen.debug();
    
    it("Has the correct SVG properties", () => {
        const { container } = render(<Mastodon />);
        const svgElement = container.querySelector("svg");

        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

    it("Renders Mastodon icon with props", () => {
        const { container } = render(<SocialIcon kind="mastodon" href={`https://test.com`} />);

        // Ensure the anchor tag is rendered with the correct href
        const linkElement = screen.getByRole("link");
        expect(linkElement).toHaveAttribute("href", "https://test.com");
        expect(linkElement).toHaveAttribute("rel", "me");

        // Ensure the sr-only span exists
        expect(screen.getByText("mastodon")).toBeInTheDocument();

        // Ensure the SVG exists 
        const svgElement = container.querySelector("svg");
        expect(svgElement).toBeInTheDocument();
        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

});

describe("Threads Icon Component", () => {

    it("Renders without crashing", () => {
        render(<Threads />);
        expect(screen.getByTitle("Threads")).toBeInTheDocument();
    });
    
    // Debug the output
    //screen.debug();
    
    it("Has the correct SVG properties", () => {
        const { container } = render(<Threads />);
        const svgElement = container.querySelector("svg");

        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

    it("Renders Threads icon with props", () => {
        const { container } = render(<SocialIcon kind="threads" href={`https://test.com`} />);

        // Ensure the anchor tag is rendered with the correct href
        const linkElement = screen.getByRole("link");
        expect(linkElement).toHaveAttribute("href", "https://test.com");
        expect(linkElement).toHaveAttribute("rel", "me");

        // Ensure the sr-only span exists
        expect(screen.getByText("threads")).toBeInTheDocument();

        // Ensure the SVG exists 
        const svgElement = container.querySelector("svg");
        expect(svgElement).toBeInTheDocument();
        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

});

describe("Instagram Icon Component", () => {

    it("Renders without crashing", () => {
        render(<Instagram />);
        expect(screen.getByTitle("Instagram")).toBeInTheDocument();
    });
    
    // Debug the output
    //screen.debug();
    
    it("Has the correct SVG properties", () => {
        const { container } = render(<Instagram />);
        const svgElement = container.querySelector("svg");

        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

    it("Renders Instagram icon with props", () => {
        const { container } = render(<SocialIcon kind="instagram" href={`https://test.com`} />);

        // Ensure the anchor tag is rendered with the correct href
        const linkElement = screen.getByRole("link");
        expect(linkElement).toHaveAttribute("href", "https://test.com");
        expect(linkElement).toHaveAttribute("rel", "me");

        // Ensure the sr-only span exists
        expect(screen.getByText("instagram")).toBeInTheDocument();

        // Ensure the SVG exists 
        const svgElement = container.querySelector("svg");
        expect(svgElement).toBeInTheDocument();
        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

});

describe("Medium Icon Component", () => {

    it("Renders without crashing", () => {
        render(<Medium />);
        expect(screen.getByTitle("Medium")).toBeInTheDocument();
    });
    
    // Debug the output
    //screen.debug();
    
    it("Has the correct SVG properties", () => {
        const { container } = render(<Medium />);
        const svgElement = container.querySelector("svg");

        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

    it("Renders Medium icon with props", () => {
        const { container } = render(<SocialIcon kind="medium" href={`https://test.com`} />);

        // Ensure the anchor tag is rendered with the correct href
        const linkElement = screen.getByRole("link");
        expect(linkElement).toHaveAttribute("href", "https://test.com");
        expect(linkElement).toHaveAttribute("rel", "me");

        // Ensure the sr-only span exists
        expect(screen.getByText("medium")).toBeInTheDocument();

        // Ensure the SVG exists 
        const svgElement = container.querySelector("svg");
        expect(svgElement).toBeInTheDocument();
        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

});

describe("Bluesky Icon Component", () => {

    it("Renders without crashing", () => {
        render(<Bluesky />);
        expect(screen.getByTitle("Bluesky")).toBeInTheDocument();
    });
    
    // Debug the output
    //screen.debug();
    
    it("Has the correct SVG properties", () => {
        const { container } = render(<Bluesky />);
        const svgElement = container.querySelector("svg");

        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

    it("Renders Bluesky icon with props", () => {
        const { container } = render(<SocialIcon kind="bluesky" href={`https://test.com`} />);

        // Ensure the anchor tag is rendered with the correct href
        const linkElement = screen.getByRole("link");
        expect(linkElement).toHaveAttribute("href", "https://test.com");
        expect(linkElement).toHaveAttribute("rel", "me");

        // Ensure the sr-only span exists
        expect(screen.getByText("bluesky")).toBeInTheDocument();

        // Ensure the SVG exists 
        const svgElement = container.querySelector("svg");
        expect(svgElement).toBeInTheDocument();
        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

});

describe("Keybase Icon Component", () => {

    it("Renders without crashing", () => {
        render(<Keybase />);
        expect(screen.getByTitle("Keybase")).toBeInTheDocument();
    });
    
    // Debug the output
    //screen.debug();
    
    it("Has the correct SVG properties", () => {
        const { container } = render(<Keybase />);
        const svgElement = container.querySelector("svg");

        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

    it("Renders Keybase icon with props", () => {
        const { container } = render(<SocialIcon kind="keybase" href={`https://test.com`} />);

        // Ensure the anchor tag is rendered with the correct href
        const linkElement = screen.getByRole("link");
        expect(linkElement).toHaveAttribute("href", "https://test.com");
        expect(linkElement).toHaveAttribute("rel", "me");

        // Ensure the sr-only span exists
        expect(screen.getByText("keybase")).toBeInTheDocument();

        // Ensure the SVG exists 
        const svgElement = container.querySelector("svg");
        expect(svgElement).toBeInTheDocument();
        expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
        expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    });

});