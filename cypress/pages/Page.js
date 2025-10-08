class Page {
    static navigateToUrl(url) {
        cy.visit(url)
    }

    static canNavigateToUrl(url) {
        cy.url().should('contain', url)
    }
}

module.exports = Page