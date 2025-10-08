const Page = require('./Page')

class LoginPage extends Page {
    //Web Elements
    static txtUsername = '#txt-username'
    static txtPassword = '#txt-password'
    static btnLogin = '#btn-login'
    static msgAlert = '.lead.text-danger'
    
    //Methods
    static inputLoginForm(username,password) {
        cy.get(this.txtUsername).type(username)
        cy.get(this.txtPassword).type(password)
        cy.get(this.btnLogin).click()
    }

    static canDisplayAlert(msg) {
        cy.get(this.msgAlert).should('have.text', msg)
    }
}

module.exports = LoginPage