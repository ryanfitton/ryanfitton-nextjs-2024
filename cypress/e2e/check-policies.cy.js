describe('Check license is linked in the footer', () => {
    it('Check license text is in the footer', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        // Assert that the footer exists
        cy.get('.site-footer').should('exist')

        // Check there is copyright text in the footer
        cy.get('.site-footer').contains('License').should('exist')
    })

    it('Check license text is linked to the policies page', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        // Find a link with an href attribute containing "policies" and click it
        cy.get('.site-footer .site-footer__footnote a[href*="/policies/"]').should('exist').click()

        // The new url should include "/policies/"
        cy.url().should('include', '/policies/')
    })
})


describe('Check policies page has the correct content', () => {
    it('Check "License" content', () => {
        const currentYear = new Date().getFullYear();
        const expectedStrings = [
            '© ' + currentYear + ' Ryan Fitton. All rights reserved.',
            'The content on this website (text, images, design, etc.) may not be copied, redistributed, or used without express permission.',
            'You are free to use the underlying code relating to this website freely and openly, as long as no content as mentioned above is copied, redistributed, or used without express permission.'
        ];

        // Start from the policies page
        cy.visit('http://localhost:3000/policies/')

        // Assert that the heading is correct
        cy.get('.component-title.component-title--main[aria-label="License Heading"]')
        .should('exist')
        .should('have.text', 'License')

        //Check the <p> tags under this heading has specific content
        .nextAll('p')
        .then($pTags => {
            expectedStrings.forEach(str => {
                const found = [...$pTags].some(p => p.textContent.includes(str));
                expect(found, `Expected to find "${str}" in a <p> tag`).to.be.true;
            });
        });
    })

    it('Check "Privacy" content', () => {
        const expectedStrings = [
            'Whenever you view a web page on this website your IP address, time, page referrer and current page will be logged, this is for analytical purposes.',
            'When you send an email; either to a direct email address or through a contact form on this website, your email address is stored securely, although it may not always be stored on this website\'s server.'
        ];

        // Start from the policies page
        cy.visit('http://localhost:3000/policies/')

        // Assert that the heading is correct
        cy.get('.component-title.component-title--main[aria-label="Privacy Heading"]')
        .should('exist')
        .should('have.text', 'Privacy')

        //Check the <p> tags under this heading has specific content
        .nextAll('p')
        .then($pTags => {
            expectedStrings.forEach(str => {
                const found = [...$pTags].some(p => p.textContent.includes(str));
                expect(found, `Expected to find "${str}" in a <p> tag`).to.be.true;
            });
        });
    })

    it('Check "Cookies" content', () => {
        const expectedStrings = [
            'This websites uses cookies to give you a better browsing experience, and to assist in analytical and advertising purposes.',
        ];

        // Start from the policies page
        cy.visit('http://localhost:3000/policies/')

        // Assert that the heading is correct
        cy.get('.component-title.component-title--main[aria-label="Cookies Heading"]')
        .should('exist')
        .should('have.text', 'Cookies')

        //Check the <p> tags under this heading has specific content
        .nextAll('p')
        .then($pTags => {
            expectedStrings.forEach(str => {
            const found = [...$pTags].some(p => p.textContent.includes(str));
            expect(found, `Expected to find "${str}" in a <p> tag`).to.be.true;
            });
        })

        // Check if a <table> element exists to hold cookie info
        .next('table')
        .should('exist')

        // Assert that the heading is correct
        .get('.component-title[aria-label="Cookie Deletion Heading"]')
        .should('exist')
        .should('have.text', 'How do I Control or Delete Cookies?')
    })

    it('Check "Comments" content', () => {
        const expectedStrings = [
            'The commenting platform is provided by Disqus. You should read their Terms, Privacy and Cookie policies for more information. If you wish to opt-out from data sharing, you can do so here.'
        ];

        // Start from the policies page
        cy.visit('http://localhost:3000/policies/')

        // Assert that the heading is correct
        cy.get('.component-title.component-title--main[aria-label="Comments Heading"]')
        .should('exist')
        .should('have.text', 'Comments')

        //Check the <p> tags under this heading has specific content
        .nextAll('p')
        .then($pTags => {
            expectedStrings.forEach(str => {
                const found = [...$pTags].some(p => p.textContent.includes(str));
                expect(found, `Expected to find "${str}" in a <p> tag`).to.be.true;
            });
        });
    })
})