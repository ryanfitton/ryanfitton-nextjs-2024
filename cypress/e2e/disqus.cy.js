describe('Check Disqus is loaded on Blog posts', () => {
    it('Should navigate to the Blog page', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        // Find a link with an href attribute containing "blog" and click it
        cy.get('.site-header a[href*="blog"]').click()

        // The new url should include "/blog/"
        cy.url().should('include', '/blog/')

        // Click on the anchor link on the first blog post listed in the posts article list
        cy.get('.component-posts-article-list')
        .find('.component-posts-article')
        .first()
        .find('.component-posts-article__title a')
        .then(($link) => {  //Now check the page url is the same as the href of the link which was clicked
            const href = $link.prop('href')

            cy.wrap($link).click()

            cy.url().should('eq', href)
        })

        // Check the Disqus iFrame attribute is loaded and the src attribute contains the Disqus URL for embeds.
        cy.get('.component-posts-article__comments iframe')
        .should('have.attr', 'src')
        .and('include', 'https://disqus.com/embed/')
    })
})