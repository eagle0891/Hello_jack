const ele = {
  lobbyHomeLink: '[data-qa="lobby-menu-list__link-home"]',
  lobbyNewLink: '[data-qa="lobby-menu-list__link-new"]',
  lobbyBingoLink: '[data-qa="lobby-menu-list__link-bingo"]',
  lobbySlotsLink: '[data-qa="lobby-menu-list__link-slots"]',
  lobbyCasinoLink: '[data-qa="lobby-menu-list__link-casino"]',
  lobbyInstantsLink: '[data-qa="lobby-menu-list__link-instants"]',
  lobbyFreeLink: '[data-qa="lobby-menu-list__link-free"]'
}


// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
   Cypress.Commands.add('setViewport', (size) => {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }
   });

   Cypress.Commands.add('returnLobbyLinks', () => {
    const lobbyLinks = [
      {link: ele.lobbyNewLink},
      {link: ele.lobbyBingoLink},
      {link: ele.lobbyFreeLink},
      {link: ele.lobbyCasinoLink},
      {link: ele.lobbySlotsLink}
  ]
   });
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
