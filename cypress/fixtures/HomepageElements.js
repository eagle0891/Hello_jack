class HomepageElements {
    
    get loginLink() {
        return cy.get('[title="Login"]');
    }

    get usernameField() {
        return cy.get('[data-qa="login-form__input-username"]');
    }

    get passwordField() {
        return cy.get('[data-qa="login-form__input-password"]');
    }

    get loginButton() {
        return cy.get('[data-qa="login-form__button-submit"]');
    }

    get forgottenPasswordLink() {
        return cy.get('[title="Forgotten Details? "]');
    }

    get joinNowLink() {
        return cy.get('[title="Join Now"]');
    }

    get venturelogoLink() {
        return cy.get('[title="Jackpotjoy Home"]');
    }

    get homeLogoButton() {
        return cy.get('[data-qa="light-layout__button-home"]');
    }

    get closeButton() {
        return cy.get('[data-qa="light-layout__button-close"]');
    }

    get emailVerificationCloseButton() {
        return cy.get('[data-qa="email-verification-overlay__button-close"]');
    }

    get lobbyHomeLink() {
        return cy.get('[data-qa="lobby-menu-list__link-home"]');
    }

    get lobbyNewLink() {
        return cy.get('[data-qa="lobby-menu-list__link-new"]');
    }

    get lobbyBingoLink() {
        return cy.get('[data-qa="lobby-menu-list__link-bingo"]');
    }

    get lobbySlotsLink() {
        return cy.get('[data-qa="lobby-menu-list__link-slots"]');
    }

    get lobbyCasinoLink() {
        return cy.get('[data-qa="lobby-menu-list__link-casino"]');
    }

    get lobbyInstantsLink() {
        return cy.get('[data-qa="lobby-menu-list__link-instants"]');
    }

    get lobbyFreeLink() {
        return cy.get('[data-qa="lobby-menu-list__link-free"]');
    }
}

export default HomepageElements;