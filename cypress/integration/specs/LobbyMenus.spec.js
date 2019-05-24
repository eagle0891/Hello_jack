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
                const lobbyMenu = [
                    homepageElements.lobbyBingoLink,
                    homepageElements.lobbyCasinoLink
                ]

                cy.log('display the correct page');
                cy.log(lobbyMenu.length);
                for (x = 1; x <= lobbyMenu.length; x++) {
                    lobbyMenu[x].click();
                    cy.log("menu option number " + x + " has been clicked");
                }
            });
        });
    });
});