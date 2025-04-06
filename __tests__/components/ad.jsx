import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Ad from '@/components/Ad'

describe("Ad Component", () => {

    it("Renders the Ad container when adClient and adSlot are provided", () => {
        const { container } = render(<Ad adClient="test-client" adSlot="test-slot" />);

        // Debug the output
        //screen.debug();

        // Check if the container div exists
        const insElement = container.querySelector("ins");
        expect(insElement).toBeInTheDocument();

        // Check if <ins> tag exists with correct attributes
        expect(insElement).toHaveAttribute("class", "adsbygoogle");
        expect(insElement).toHaveAttribute("data-ad-client", "test-client");
        expect(insElement).toHaveAttribute("data-ad-slot", "test-slot");
        expect(insElement).toHaveAttribute("data-ad-format", "auto");
    });

    it("Does not render when adClient and adSlot is missing", () => {
        const { container } = render(<Ad adClient="" adSlot="" />);
        expect(container.firstChild).toBeNull();
    });
    
});