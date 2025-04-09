describe('Check Ads are loaded on Blog posts', () => {
    it('Should navigate to the Blog page', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        // Assert that the site header exists
        cy.get('.site-header').should('exist')

        // Find a link with an href attribute containing "blog" and click it
        cy.get('.site-header a[href*="blog"]').should('exist').click()

        // The new url should include "/blog/"
        cy.url().should('include', '/blog/')

        // Grab the link first, extract the href, then click
        cy.get('.component-posts-article-list')
            .find('.component-posts-article')
            .first()
            .find('.component-posts-article__title a')
            .then(($link) => {
                const href = $link.prop('href')
                expect(href).to.be.a('string').and.not.be.empty

                cy.wrap($link).click()

                // Now verify URL after the click
                cy.url().should('eq', href)
            })

        // Check ads
        // Check the top ad is injected - Slot ID: 2783608258
        cy.get('.component-ad ins[data-ad-slot="2783608258"]').should('exist')

        // Check the bottom ad is injected - Slot ID: 9767850827
        cy.get('.component-ad ins[data-ad-slot="9767850827"]').should('exist')
    })
})