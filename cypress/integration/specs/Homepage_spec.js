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
    username: 'xxxxxx',
    password: 'xxxxxx'
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
        cy.fixture("userData").as("credentials");
        cy.visit('/');
        //cy.setViewport(size);
    });    
    
    it('should display the login button', () => {
       cy.get(ele.loginLink).should('be.visible'); 
    });

        describe('When I click the Login button', () => {
            beforeEach(() => {
                cy.get(ele.loginLink).click();
            });
            
            it('should display quick-login components', () => {
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

            describe('When I log into the venture', () => {
                it('should display the lobby', () => {
                    cy.get(ele.usernameField).type(data.username).should('have.value', data.username);
                    cy.get(ele.passwordField).type(data.password).should('have.value', data.password);
                    cy.get(ele.loginButton).click();    
                });
            });

            describe('When I click the forgotten password link', () => {
                it('should display the forgotten password page', () => {
                    cy.get(ele.usernameField).type(data.username).should('have.value', data.username);
                    cy.get(ele.passwordField).type(data.password).should('have.value', data.password);
                    cy.get(ele.forgottenPasswordLink).click();    
                });
            });

            describe('When I click the lobby menu links', () => {
                it.only('should display the correct page on each instance', () => {
                    // cy.get(ele.usernameField).type(this.credentials.username).should('have.value', this.credentials.username);
                    // cy.get(ele.passwordField).type(this.credentials.password).should('have.value', this.credentials.password);

                    cy.get(ele.usernameField).type(data.username).should('have.value', data.username);
                    cy.get(ele.passwordField).type(data.password).should('have.value', data.password);
                    cy.get(ele.loginButton).click();  
                    cy.get(ele.emailVerificationCloseButton).click();  

                    const lobbyLinks = [
                        {link: ele.lobbyNewLink},
                        {link: ele.lobbyBingoLink},
                        {link: ele.lobbyFreeLink},
                        {link: ele.lobbyCasinoLink},
                        {link: ele.lobbySlotsLink}
                    ]

                    cy.wrap(lobbyLinks).each(lobbyLinks => {
                        cy.get(lobbyLinks.link).click();
                    })
                });
            });
        });
    });
});