class HomePage{

    clickSupportLink(){
        cy.get('.main-nav > [href="/us/contact-us"]').click();
    }

    assertTitlePage(){
        cy.title().should('eq', 'Earned Wage Access App | Rain Instant Pay | Get Paid Daily')
    }



}
export default new HomePage();