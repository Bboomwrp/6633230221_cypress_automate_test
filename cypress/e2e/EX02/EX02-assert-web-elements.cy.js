// EX02-assert-web-elements.cy.js

describe('EX02 - Assert Web Elements: Make Appointment Page', () => {
    const url = 'https://katalon-demo-cura.herokuapp.com/';
    const username = 'John Doe';
    const password = 'ThisIsNotAPassword';

    beforeEach(() => {
        cy.visit(url);
        cy.get('#menu-toggle').click();
        cy.contains('Login').click();

        // Login
        cy.get('#txt-username').type(username);
        cy.get('#txt-password').type(password);
        cy.get('#btn-login').click();

        // Confirm we are on Make Appointment page
        cy.contains('Make Appointment').should('be.visible');
    });

    it('Page displays "Make Appointment" in h2', () => {
        cy.get('h2').should('contain', 'Make Appointment');
    });

    it('Can select all facility combo boxes', () => {
        cy.get('#combo_facility').select('Tokyo CURA Healthcare Center').should('have.value', 'Tokyo CURA Healthcare Center');
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center').should('have.value', 'Hongkong CURA Healthcare Center');
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center').should('have.value', 'Seoul CURA Healthcare Center');
    });

    it('Can select apply for hospital readmission checkbox', () => {
        cy.get('#chk_hospotal_readmission').check().should('be.checked');
    });

    it('Can select health care program radio button', () => {
        cy.get('#radio_program_medicaid').check().should('be.checked');
        cy.get('#radio_program_medicare').check().should('be.checked');
        cy.get('#radio_program_none').check().should('be.checked');
    });

    it('Can input current date on Visit Date', () => {
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    cy.get('#txt_visit_date').type(today).should('have.value', today);
    });

    it('Can input comment', () => {
        const comment = 'This is a test appointment.';
        cy.get('#txt_comment').type(comment).should('have.value', comment);
    });

    it('Book appointment button is displayed and enabled', () => {
        cy.get('#btn-book-appointment').should('be.visible').and('be.enabled');
    });
});
