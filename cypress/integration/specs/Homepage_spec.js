import HomepageElements from "../../fixtures/HomepageElements";
import testData from "../../fixtures/Testdata";
import deviceSize from "../../fixtures/DeviceSizes";

const homepageElements = new HomepageElements();

const sizes = [
    // 'iphone-6', 
    // 'ipad-2', 
    // [1024, 768],
    [300, 400]
]

deviceSize.forEach((size) => {
describe('When I navigate to the Jackpotjoy homepage on a ' + size + ' size screen', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.setViewport(size);
    });    

    it('should display the login button', () => {
       homepageElements.loginLink.should('be.visible'); 
    });

        describe('When I click the lobby Login link', () => {
            beforeEach(() => {
                homepageElements.loginLink.click();
            });

            it('should display quick-login overlay', () => {
                cy.url().should('include', '/quick-login');
                homepageElements.usernameField.should('be.visible');
                homepageElements.passwordField.should('be.visible');
                homepageElements.loginButton.should('be.visible');
                homepageElements.forgottenPasswordLink.should('be.visible');
                homepageElements.joinNowLink.should('be.visible');
                homepageElements.venturelogoLink.should('be.visible');  
                homepageElements.homeLogoButton.should('be.visible');
                homepageElements.closeButton.should('be.visible');          
            });

            describe('When I enter a username and password', () => {
                beforeEach(() => {
                    homepageElements.usernameField.type(testData.username).should('have.value', testData.username);
                    homepageElements.passwordField.type(testData.password).should('have.value', testData.password);
                })

                // it('should return the correct xhr reponse', () => {
                //     cy.server();
                //     cy.route('POST', '/api/login/').as('getLogin');
                //     homepageElements.usernameField).type(testData.username.should('have.value', testData.username);
                //     homepageElements.passwordField).type(testData.password.should('have.value', testData.password);
                //     homepageElements.loginButton).click();
                //     cy.wait('@getLogin').then(function(xhr){
                //         const response = xhr.responseBody
                //         expect(response).to.have.property('memberId', '18079357');
                //     });
                // });
            
                context('and I click the login button', () => {
                    beforeEach(() => {
                        homepageElements.loginButton.click();
                    });
                    it('should display the email verification overlay', () => {
                        homepageElements.emailVerificationCloseButton.should('be.visible');
                    });
                });

                context('and I click the forgotten password link', () => {
                    beforeEach(() => {
                        homepageElements.forgottenPasswordLink.click();
                    });
                    it('should display the forgotten password page', () => {
                        cy.url().should('eq', testData.url + testData.urlExt);    
                    });
                });

                //Work in progress - partly fails
                describe('When I click the lobby menu links', () => {
                    beforeEach(() => {
                        homepageElements.loginButton.click();  
                    });
                    it('should display the correct page on each instance', () => {
                        //cy.viewport(1000, 660);
                        homepageElements.emailVerificationCloseButton.click();  

                        if (cy.viewport(size) === 'iphone-6') {
                            cy.getLobbyLinks();

                            cy.log("this is a res of iphone6");
                            // cy.wrap(lobbyLinks).each(lobbyLinks => {
                            //     cy.get(lobbyLinks.link).click();
                            // })
                        } 
                        else if (cy.viewport(size) === 'ipad-2') {
                            cy.getLobbyLinks();
                            cy.log("this is a res of ipad2");
                            // cy.wrap(lobbyLinks).each(lobbyLinks => {
                            //     cy.get(lobbyLinks.link).click();
                            // })
                        } 
                        else if (cy.viewport(size) === 1024, 768) {
                            cy.getLobbyLinks();
                            cy.log("this is a res of 1024, 768");
                            // cy.wrap(lobbyLinks).each(lobbyLinks => {
                            //     cy.get(lobbyLinks.link).click();
                            // })
                        } 
                        else if (cy.viewport(size) === 300, 400) {
                            cy.getLobbyLinks();
                            cy.log("this is a res of 300,400");
                            // cy.wrap(lobbyLinks).each(lobbyLinks => {
                            //     cy.get(lobbyLinks.link).click();
                            // });
                        }
                    });
                });
            });
        });
    });
});