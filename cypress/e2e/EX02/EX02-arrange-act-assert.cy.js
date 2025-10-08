// EX02-arrange-act-assert.cy.js

describe('EX02 - Arrange Act Assert: Login Tests', () => {
    const url = 'https://katalon-demo-cura.herokuapp.com/';
    
    beforeEach(() => {
        cy.visit(url);
        cy.get('#menu-toggle').click(); // Open menu
        cy.contains('Login').click(); // Navigate to login
    });

    it('Login with valid user should pass', () => {
        // Arrange
        const username = 'John Doe';
        const password = 'ThisIsNotAPassword';
        
        // Act
        cy.get('#txt-username').type(username);
        cy.get('#txt-password').type(password);
        cy.get('#btn-login').click();
        
        // Assert
        cy.url().should('include', '#appointment');
        cy.contains('Make Appointment').should('be.visible');
    });

    it('Login with invalid password should fail', () => {
        // Arrange
        const username = 'John Doe';
        const password = 'WrongPassword';
        
        // Act
        cy.get('#txt-username').type(username);
        cy.get('#txt-password').type(password);
        cy.get('#btn-login').click();
        
        // Assert
        cy.get('.text-danger').should('contain', 'Login failed! Please ensure the username and password are valid.');
    });

    it('Login with invalid username should fail', () => {
        // Arrange
        const username = 'InvalidUser';
        const password = 'ThisIsNotAPassword';
        
        // Act
        cy.get('#txt-username').type(username);
        cy.get('#txt-password').type(password);
        cy.get('#btn-login').click();
        
        // Assert
        cy.get('.text-danger').should('contain', 'Login failed! Please ensure the username and password are valid.');
    });
});
