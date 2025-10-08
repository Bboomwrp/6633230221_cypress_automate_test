class HomePage {
  verifyIsLoggedIn() {
    cy.url().should('include', 'account-summary.html');
    cy.contains('Cash Accounts').should('exist');
  }
}

export default new HomePage();
