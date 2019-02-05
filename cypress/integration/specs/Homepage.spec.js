import HomepageElements from "../../fixtures/HomepageElements";
import testData from "../../fixtures/Testdata";
import deviceSize from "../../fixtures/DeviceSizes";

const homepageElements = new HomepageElements();

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

            // describe('When I enter a username and password', () => {
            //     beforeEach(() => {
            //         homepageElements.usernameField.type(testData.username).should('have.value', testData.username);
            //         homepageElements.passwordField.type(testData.password).should('have.value', testData.password);
            //     })

            //     // it('should return the correct xhr reponse', () => {
            //     //     cy.server();
            //     //     cy.route('POST', '/api/login/').as('getLogin');
            //     //     homepageElements.usernameField).type(testData.username.should('have.value', testData.username);
            //     //     homepageElements.passwordField).type(testData.password.should('have.value', testData.password);
            //     //     homepageElements.loginButton).click();
            //     //     cy.wait('@getLogin').then(function(xhr){
            //     //         const response = xhr.responseBody
            //     //         expect(response).to.have.property('memberId', '18079357');
            //     //     });
            //     // });
            
            //     context('and I click the login button', () => {
            //         beforeEach(() => {
            //             homepageElements.loginButton.click();
            //         });
            //         it('should display the email verification overlay', () => {
            //             homepageElements.emailVerificationCloseButton.should('be.visible');
            //         });
            //     });

            //     context('and I click the forgotten password link', () => {
            //         beforeEach(() => {
            //             homepageElements.forgottenPasswordLink.click();
            //         });
            //         it('should display the forgotten password page', () => {
            //             cy.url().should('eq', testData.url + testData.urlExt);    
            //         });
            //     });
            // });

            describe('When I navigate to the lobby without logging in', () => {
                beforeEach(() => {
                    homepageElements.closeButton.click();
                });
                
                it('should display the correct page on each instance', () => {
                    cy.log(size);
                    if (size == deviceSize[0]) {
                        cy.get('[data-qa="lobby-menu-list__link-home"]').should('be.visible');
                        cy.get('[data-qa="lobby-menu-list__item-more"]').should('be.visible');
                        cy.log("this is a res of " + size);
                    } 
                    else if (size == deviceSize[1]) {
                        cy.get('[data-qa="lobby-menu-list__link-home"]').should('be.visible');
                        cy.get('[data-qa="lobby-menu-list__item-more"]').should('be.visible');
                        cy.log("this is a res of " + size);
                    } 
                    else if (size == deviceSize[2]) {
                        cy.get('[data-qa="lobby-menu-list__link-home"]').should('be.visible');
                        cy.get('[data-qa="lobby-menu-list__item-more"]').should('be.visible');
                        cy.log("this is a res of " + size);
                    } 
                    else if (size == deviceSize[3]) {
                        cy.log("this is a res of 300,400");
                        cy.get('[data-qa="lobby-menu-list__link-home"]').should('be.visible');
                        cy.get('[data-qa="lobby-menu-list__item-more"]').should('be.visible');
                    }
                    else if (size == deviceSize[4]) {
                        cy.log("this is a res of " + size);
                        cy.get('[data-qa="lobby-menu-list__link-home"]').should('be.visible');
                        cy.get('[data-qa="lobby-menu-list__item-more"]').should('not.be.visible');
                    }
                });
            });
        });
    });
});