// Import the necessary POM classes
import HomePage from '../../pages/HomePage'
import SupportPage from '../../pages/SupportPage';

describe('RainApp', () => {

  beforeEach(() => {
    // Visit the RainApp website's homepage before each test
    cy.visit('https://www.rainapp.com/');
  });

  it('should navigate to the Terms of Use page @smoke' , () => {
    //Assert page is loaded
    HomePage.assertTitlePage();
    // Click on the "Terms of Use" link on the homepage
    HomePage.clickSupportLink();

    // Verify that the browser navigates to the Contact us Page
    SupportPage.verifyPageTitle();
    //Verify mail address is not clickable
    SupportPage.assertElementClickable();


  });

  afterEach(() => {
    // Take a screenshot
    cy.screenshot();
  });
});