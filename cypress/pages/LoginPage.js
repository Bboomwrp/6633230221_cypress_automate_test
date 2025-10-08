class LoginPage {
  visit() {
    cy.visit('http://zero.webappsecurity.com/login.html');
  }

  fillUsername(username) {
    cy.get('#user_login').type(username);
  }

  fillPassword(password) {
    cy.get('#user_password').type(password);
  }

  submit() {
    cy.get('input[name="submit"]').click();
  }

  assertLoginSuccess() {
    cy.url().should('include', '/account-summary.html');
    cy.get('h2').should('contain', 'Cash Accounts');
  }

  assertLoginFailed() {
    cy.get('.alert-error')
      .should('be.visible')
      .and('contain', 'Login and/or password are wrong.');
  }
}

export default new LoginPage();
