// EX03-custom-command.cy.js

describe('EX03 - Custom Command: Login Tests', () => {
    const url = 'https://katalon-demo-cura.herokuapp.com/';
    
    beforeEach(() => {
        cy.visit(url);
        cy.get('#menu-toggle').click(); 
        cy.contains('Login').click(); 
    });

    it('Login with valid user should pass', () => {
        cy.login('John Doe', 'ThisIsNotAPassword');
        cy.url().should('include', '#appointment');
        cy.contains('Make Appointment').should('be.visible');
    });

    it('Login with invalid password should fail', () => {
        cy.login('John Doe', 'WrongPassword');
        cy.get('.text-danger').should('contain', 'Login failed! Please ensure the username and password are valid.');
    });

    it('Login with invalid username should fail', () => {
        cy.login('InvalidUser', 'ThisIsNotAPassword');
        cy.get('.text-danger').should('contain', 'Login failed! Please ensure the username and password are valid.');
    });
});
