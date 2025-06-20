import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import ThemeSwitch from '@/components/ThemeSwitch'


// Mock next-themes
jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

const mockSetTheme = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  require('next-themes').useTheme.mockReturnValue({
    theme: 'light',
    setTheme: mockSetTheme,
    resolvedTheme: 'light',
  });
});


describe("ThemeSwitch Component", () => {

    it('Renders the theme switch button with Sun icon when theme is light', () => {
        render(<ThemeSwitch />);

        // Debug the output
        //screen.debug();

        const button = screen.getByRole('button');  //Button is the main button element
        expect(button).toBeInTheDocument();
        expect(button.innerHTML).toMatch(/svg/); // basic check for icon

        //Check if the element has the correct ARIA attributes
        expect(button).toHaveAttribute("role", "button")
        expect(button.getAttribute("aria-label")).toContain("Switch theme to Dark");
    });

    it('Shows theme options on click and triggers setTheme', async () => {
        render(<ThemeSwitch />);

        // Open the theme menu
        const toggleButton = screen.getByRole('button');
        fireEvent.click(toggleButton);

        // Wait for menu items to render
        await waitFor(() => {
            expect(screen.getByText(/Light/i)).toBeInTheDocument();
            expect(screen.getByText(/Dark/i)).toBeInTheDocument();
            expect(screen.getByText(/System/i)).toBeInTheDocument();
        });

        // Click on Dark theme option
        const darkOption = screen.getByText('Dark');
        fireEvent.click(darkOption);

        // setTheme should be called with "dark"
        expect(mockSetTheme).toHaveBeenCalledWith('dark');
    });
    
});