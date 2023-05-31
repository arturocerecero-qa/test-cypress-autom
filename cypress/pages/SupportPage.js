class SupportPage {

    verifyPageTitle(){
        cy.title().should('eq', 'Contact us | Get in touch with us!')
    }

    assertElementClickable(){
        cy.get('.hero-paragraph > :nth-child(1)')
            .should($span => {
                const message = $span.parent().parent().text();
                expect($span, message).to.not.have.attr("href")
            } )
    }


}
export default new SupportPage();