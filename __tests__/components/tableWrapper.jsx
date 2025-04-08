import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TableWrapper from '@/components/TableWrapper'

describe("TableWrapper Component", () => {

    it("Renders the TableWrapper container with test data, check the returned result contains the required classnames", () => {
        render(<TableWrapper>
            <tbody>
            <tr>
                <td>Test Cell</td>
            </tr>
            </tbody>
        </TableWrapper>);

        // Debug the output
        //screen.debug();

        // Check if the cell text exists
        const cell = screen.getByText('Test Cell');
        expect(cell).toBeInTheDocument();   

        // Checks it's inside a table element
        const table = cell.closest('table');
        expect(table).toBeInTheDocument();

        // Checks the wrapper div has the correct class
        const wrapperDiv = table.closest('div');
        expect(wrapperDiv).toHaveClass('w-full', 'overflow-x-auto');
    });
    
});