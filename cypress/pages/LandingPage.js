const Page = require('./Page')

class LandingPage extends Page {
    //Web Elements
    static lnkMakeAppointment = '#btn-make-appointment'

    //Methods
    static clickMakeAppointment() {
        cy.get(this.lnkMakeAppointment).click()
    }
}

module.exports = LandingPage