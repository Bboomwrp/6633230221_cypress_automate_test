it('intercept command', () => {

    //intercept mocking data
    cy.intercept(
        //Route Matcher
        {
            method: 'GET',
            url: 'https://www.scb.co.th/services/scb/exchangeRateService/**'
        },
        
    )
})