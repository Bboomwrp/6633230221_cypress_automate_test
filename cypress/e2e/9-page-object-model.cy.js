const LandingPage  = require('../page-objects/LandingPage')
const LoginPage    = require('../page-objects/LoginPage')

it('POM - Make Appointment', () => {
    const url = 'https://katalon-demo-cura.herokuapp.com/'

    // Navigate to URL
    LandingPage.navigateToUrl(url)
    LandingPage.canNavigateToUrl('katalon-demo-cura.herokuapp.com')
})