const ele = {
    loginLink: '[title="Login"]',
    usernameField: '[data-qa="login-form__input-username"]',
    passwordField: '[data-qa="login-form__input-password"]',
    loginButton: '[data-qa="login-form__button-submit"]',
    forgottenPasswordLink: '[title="Forgotten Details? "]',
    joinNowLink: '[title="Join Now"]',
    venturelogoLink: '[title="Jackpotjoy Home"]',
    homeLogoButton: '[data-qa="light-layout__button-home"]',
    closeButton: '[data-qa="light-layout__button-close"]'
}

const data = {
    username: 'xxxxxxx',
    password: 'password'
}

const sizes = [
    'iphone-6', 
    'ipad-2', 
    [1024, 768],
    [300, 400]
]

sizes.forEach((size) => {
describe('When I navigate to the Jackpotjoy homepage', () => {
    beforeEach(() => {
        cy.visit('/');
    });    
    
    it('should display the login button on a ' + size + ' size screen', () => {
       cy.setViewport(size); //custom command
       cy.get(ele.loginLink).should('be.visible'); 
    });

        describe('When I click the Login button', () => {
            beforeEach(() => {
                cy.get(ele.loginLink).click();
            });
            
            it('should display quick-login components on a ' + size + ' size screen', () => {
                cy.setViewport(size); //custom command
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

            // // describe('When I log into the venture', () => {
            // //     it('should display the lobby', () => {
            // //         cy.get(ele.usernameField).fixture('users').then((json) => {
            // //             cy.server();
            // //             cy.route('GET', json);
            // //         });    
            // //         cy.get(ele.passwordField).type(data.password);
            // //         cy.get(ele.loginButton).click();    
            // //     });
            // });
        });
    });
});