// EX03-then-alias-fixture.cy.js

describe('EX03 - Then, Alias, Fixture: Login Tests', () => {
    const url = 'https://katalon-demo-cura.herokuapp.com/';

    beforeEach(() => {
        cy.visit(url);
        cy.get('#menu-toggle').click();
        cy.contains('Login').click();

        // โหลด fixture data
        cy.fixture('users').as('usersData');
    });

    it('Login with valid user should pass', function () {
        cy.login(this.usersData.validUser.username, this.usersData.validUser.password);
        cy.url().should('include', '#appointment');
        cy.contains('Make Appointment').should('be.visible');
    });

    it('Login with invalid password should fail', function () {
        cy.login(this.usersData.invalidPassword.username, this.usersData.invalidPassword.password);
        cy.get('.text-danger').should('contain', 'Login failed! Please ensure the username and password are valid.');
    });

    it('Login with invalid username should fail', function () {
        cy.login(this.usersData.invalidUser.username, this.usersData.invalidUser.password);
        cy.get('.text-danger').should('contain', 'Login failed! Please ensure the username and password are valid.');
    });
});
