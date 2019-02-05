import HomepageElements from "../../fixtures/HomepageElements"

const homepageElements = new HomepageElements();

describe('When I navigate to the Jackpotjoy homepage', () => {
    beforeEach(() => {
        cy.visit('/');
    });   

    describe('and I click the lobby Login link', () => {
        beforeEach(() => {
            homepageElements.loginLink.click();
        });

        describe('when I click on the lobby menu links', () => {
            it('should display the correct page', () => {
                cy.log('display the correct page');
            });
        });
    });
});