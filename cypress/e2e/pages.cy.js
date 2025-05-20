describe('Check pages are setup and can be navigated to', () => {
    it('Should navigate to the Blog page', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        // Find a link with an href attribute containing "blog" and click it
        cy.get('.site-header .component-navbar--header a[href*="blog"]').should('exist').click()

        // The new url should include "/blog/"
        cy.url().should('include', '/blog/')

        // The new page should contain an h1 with "Blog"
        cy.get('h1.hero__title').contains('Blog').should('exist')
    })

    it('Should load the Blog article page', () => {
        // Start from the blog post page
        cy.visit('http://localhost:3000/blog/new-home-network-and-tech-skills/')

        // The new url should include "/blog/new-home-network-and-tech-skills/"
        cy.url().should('include', '/blog/new-home-network-and-tech-skills/')

        // The page should contain an h1 with "Blog"
        cy.get('h1.hero__title').contains('Blog').should('exist')

        // The page should contain an h1 with the article title
        cy.get('h1.component-posts-article__title')
            .contains('Transforming My Home Network and Upskilling in Tech 2024–2025 (So far!)')
            .should('exist')
    })

    it('Should navigate to the Tags page', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        // Find a link with an href attribute containing "tags" and click it
        cy.get('.site-header .component-navbar--header a[href*="tags"]').should('exist').click()

        // The new url should include "/tags/"
        cy.url().should('include', '/tags/')

        // The new page should contain an h1 with "Tags"
        cy.get('h1.hero__title').contains('Tags').should('exist')
    })

    it('Should load the Development tag page', () => {
        // Start from the development tag page
        cy.visit('http://localhost:3000/tags/development/')

        // The new url should include "/tags/development/"
        cy.url().should('include', '/tags/development/')

        // The page should contain an h1 with "Development"
        cy.get('h1.hero__title').contains('Development').should('exist')
    })

    it('Should navigate to the Portfolio page', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        // Find a link with an href attribute containing "portfolio" and click it
        cy.get('.site-header .component-navbar--header a[href*="portfolio"]').should('exist').click()

        // The new url should include "/portfolio/"
        cy.url().should('include', '/portfolio/')

        // The new page should contain an h1 with "Portfolio"
        cy.get('h1.hero__title').contains('Portfolio').should('exist')
    })

    it('Should load a Portfolio single page', () => {
        // Start from the portfolio single page
        cy.visit('http://localhost:3000/portfolio/redirecturl-info/')

        // The new url should include "/portfolio/redirecturl-info/"
        cy.url().should('include', '/portfolio/redirecturl-info/')

        // The page should contain an h1 with "Portfolio"
        cy.get('h1.hero__title').contains('Portfolio').should('exist')

        // The page should contain an h1 with "RedirectURL.info"
        cy.get('h1.component-posts-article__title').contains('RedirectURL.info').should('exist')
    })

    it('Should navigate to the About page', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        // Find a link with an href attribute containing "about" and click it
        cy.get('.site-header .component-navbar--header a[href*="about"]').should('exist').click()

        // The new url should include "/about/"
        cy.url().should('include', '/about/')

        // The new page should contain an h1 with "About"
        cy.get('h1.hero__title').contains('About').should('exist')
    })

    it('Should navigate to the Policies page', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        // Find a link with an href attribute containing "policies" and click it
        cy.get('.site-footer .component-navbar--footer a[href*="policies"]').should('exist').click()

        // The new url should include "/policies/"
        cy.url().should('include', '/policies/')

        // The new page should contain an h1 with "Policies"
        cy.get('h1.hero__title').contains('Policies').should('exist')
    })

    it('Should navigate to the Colophon page', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        // Find a link with an href attribute containing "colophon" and click it
        cy.get('.site-footer .component-navbar--footer a[href*="colophon"]').should('exist').click()

        // The new url should include "/colophon/"
        cy.url().should('include', '/colophon/')

        // The new page should contain an h1 with "Colophon"
        cy.get('h1.hero__title').contains('Colophon').should('exist')
    })

    /*
    it('Should load the 404 page', () => {
        // Start a page which will cause a 404 error
        cy.request({url: 'http://localhost:3000/this-is-a-page-which-does-not-exist-4512261/', failOnStatusCode: false}).its('status').should('equal', 404)

        // Start from the 404 page
        cy.visit('http://localhost:3000/404/', {failOnStatusCode: false})

        // The new url should include "/404/"
        cy.url().should('include', '/404/')

        // The new page should contain an h1 with "404"
        cy.get('h1.hero__title').contains('404').should('exist')
    })
    */
})