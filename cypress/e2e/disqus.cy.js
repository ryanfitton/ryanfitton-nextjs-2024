describe('Check Disqus is loaded on Blog posts', () => {
    it('Should navigate to the Blog page', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        // Assert that the site header exists
        cy.get('.site-header').should('exist')

        // Find a link with an href attribute containing "blog" and click it
        cy.get('.site-header a[href*="blog"]').should('exist').click()

        // The new url should include "/blog/"
        cy.url().should('include', '/blog/')

        // Assert that the blog page contains a list of articles
        cy.get('.component-posts-article-list').should('exist')

        // Click on the anchor link on the first blog post listed in the posts article list
        cy.get('.component-posts-article-list')
            .find('.component-posts-article')
            .first()
            .find('.component-posts-article__title a')
            .then(($link) => {
                // Assert that the link has an href attribute
                expect($link).to.have.attr('href')

                // Now check the page url is the same as the href of the link which was clicked
                const href = $link.prop('href')
                expect(href).to.be.a('string').and.not.be.empty

                cy.wrap($link).click()

                // Assert that the URL matches the href of the clicked link
                cy.url().should('eq', href)
            })

        // Check the Disqus iFrame attribute is loaded and the src attribute contains the Disqus URL for embeds.
        cy.get('.component-posts-article__comments iframe')
            .should('exist')
            .should('have.attr', 'src')
            .and('include', 'https://disqus.com/embed/')

        // Assert that the iframe is visible
        cy.get('.component-posts-article__comments iframe').should('be.visible')
    })
})