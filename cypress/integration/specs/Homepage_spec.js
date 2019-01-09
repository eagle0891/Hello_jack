const ele = {
    loginLink: '[title="Login"]',
    usernameField: '[data-qa="login-form__input-username"]',
    passwordField: '[data-qa="login-form__input-password"]',
    loginButton: '[data-qa="login-form__button-submit"]',
    forgottenPasswordLink: '[title="Forgotten Details? "]',
    joinNowLink: '[title="Join Now"]',
    venturelogoLink: '[title="Jackpotjoy Home"]',
    homeLogoButton: '[data-qa="light-layout__button-home"]',
    closeButton: '[data-qa="light-layout__button-close"]',
    emailVerificationCloseButton: '[data-qa="email-verification-overlay__button-close"]',
    lobbyHomeLink: '[data-qa="lobby-menu-list__link-home"]',
    lobbyNewLink: '[data-qa="lobby-menu-list__link-new"]',
    lobbyBingoLink: '[data-qa="lobby-menu-list__link-bingo"]',
    lobbySlotsLink: '[data-qa="lobby-menu-list__link-slots"]',
    lobbyCasinoLink: '[data-qa="lobby-menu-list__link-casino"]',
    lobbyInstantsLink: '[data-qa="lobby-menu-list__link-instants"]',
    lobbyFreeLink: '[data-qa="lobby-menu-list__link-free"]'
}

const data = {
    username: 'xxxxxxx',
    password: 'xxxxxxx',
    url: 'https://www.jackpotjoy.com',   
    urlExt: '/forgottenusernamepassword'
}

const sizes = [
    'iphone-6', 
    'ipad-2', 
    [1024, 768],
    [300, 400]
]

sizes.forEach((size) => {
describe('When I navigate to the Jackpotjoy homepage on a ' + size + ' size screen', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.setViewport(size);
    });    

    it('should display the login button', () => {
       cy.get(ele.loginLink).should('be.visible'); 
    });

        describe('When I click the lobby Login link', () => {
            beforeEach(() => {
                cy.get(ele.loginLink).click();
            });

            it('should display quick-login overlay', () => {
                cy.url().should('include', '/quick-login');
                cy.get(ele.usernameField).should('be.visible');
                cy.get(ele.passwordField).should('be.visible');
                cy.get(ele.loginButton).should('be.visible');
                cy.get(ele.forgottenPasswordLink).should('be.visible');
                cy.get(ele.joinNowLink).should('be.visible');
                cy.get(ele.venturelogoLink).should('be.visible');  
                cy.get(ele.homeLogoButton).should('be.visible');
                cy.get(ele.closeButton).should('be.visible');          
            });

            describe('When I enter a username and password', () => {
                beforeEach(() => {
                    cy.get(ele.usernameField).type(data.username).should('have.value', data.username);
                    cy.get(ele.passwordField).type(data.password).should('have.value', data.password);
                })
            
                context('and I click the login button', () => {
                    it('should display the email verification overlay', () => {
                        cy.get(ele.loginButton).click();
                        cy.get(ele.emailVerificationCloseButton).should('be.visible');
                    });
                });

                context('and I click the forgotten password link', () => {
                    it('should display the forgotten password page', () => {
                        cy.get(ele.forgottenPasswordLink).click();
                        cy.url().should('eq', data.url + data.urlExt);    
                    });
                });

                //Work in progress - partly fails
                describe('When I click the lobby menu links', () => {
                    it('should display the correct page on each instance', () => {
                        //cy.viewport(1000, 660);
                        cy.get(ele.loginButton).click();  
                        cy.get(ele.emailVerificationCloseButton).click();  

                        if (cy.viewport(size) === 'iphone-6') {
                            cy.returnLobbyLinks();

                            cy.log("this is a res of iphone6");
                            // cy.wrap(lobbyLinks).each(lobbyLinks => {
                            //     cy.get(lobbyLinks.link).click();
                            // })
                        } 
                        else if (cy.viewport(size) === 'ipad-2') {
                            cy.returnLobbyLinks();
                            cy.log("this is a res of ipad2");
                            // cy.wrap(lobbyLinks).each(lobbyLinks => {
                            //     cy.get(lobbyLinks.link).click();
                            // })
                        } 
                        else if (cy.viewport(size) === 1024, 768) {
                            cy.returnLobbyLinks();
                            cy.log("this is a res of 1024, 768");
                            // cy.wrap(lobbyLinks).each(lobbyLinks => {
                            //     cy.get(lobbyLinks.link).click();
                            // })
                        } 
                        else (cy.viewport(size) === 300, 400) {
                            cy.returnLobbyLinks();
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