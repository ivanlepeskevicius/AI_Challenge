require("cypress-iframe");

import {
  accept_cookies_btn,
  cookies_banner,
  text_box,
  stop_generating_btn,
  visual_search_btn,
  visual_search_link,
  bot_message,
  bot_block_message
} from "./locators";

declare global {
  namespace Cypress {
    interface Chainable {
      acceptCookies(): void;
      askQuestion(question: string): void;
      waitForResponse(): void;
      uploadImageUsingLink(link: string, alias: string): void;
      checkAnswerContains(text: string): void;
    }
  }
}

Cypress.Commands.add("acceptCookies", () => {
  cy.get(accept_cookies_btn).click();
  cy.get(cookies_banner).should("not.be.visible");
});

Cypress.Commands.add("askQuestion", (question: string) => {
  cy.get(text_box).type(question + "{enter}");
  cy.waitForResponse();
});

Cypress.Commands.add("waitForResponse", () => {
  cy.waitUntil(() => cy.get(stop_generating_btn).should("be.visible"));
  cy.waitUntil(() => cy.get(stop_generating_btn).should("not.be.visible"));
});

Cypress.Commands.add("uploadImageUsingLink", (link, alias) => {
  cy.get(visual_search_btn).click();
  cy.get(visual_search_link).type(link + "{enter}");
  cy.wait(alias);
});

Cypress.Commands.add("checkAnswerContains", (text) => {
    cy.get(bot_message).shadow().find(bot_block_message).should('contain.text', text)
});