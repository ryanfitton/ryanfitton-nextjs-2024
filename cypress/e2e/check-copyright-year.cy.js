describe('Check copyright year is the current year in the footer', () => {
    it('Check copyright text is in the footer', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        // Assert that the footer exists
        cy.get('.site-footer').should('exist')

        // Check there is copyright text in the footer
        cy.get('.site-footer').contains('©').should('exist')
        cy.get('.site-footer').contains('Ryan Fitton').should('exist')
    })

    it('Check copyright year is the current year', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')
        
        // Assert that the footer exists
        cy.get('.site-footer').should('exist')

        // Check there is copyright text in the footer
        const currentYear = new Date().getFullYear()
        cy.get('.site-footer').contains(currentYear).should('exist')
    })

    it('Check the copyright wording is in the correct format', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')
        
        // Assert that the footer exists
        cy.get('.site-footer').should('exist')

        // Check there is copyright text in the footer.
        const currentYear = new Date().getFullYear()
        cy.get('.site-footer').contains('© ' + currentYear + ' Ryan Fitton').should('exist')
    })
})