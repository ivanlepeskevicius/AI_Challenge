import {
  like_btn,
  dislike_btn,
  thanks_feedback_icon,
  bad_feedback_icon,
  feedback_form_link,
  other_btn,
  feedback_textbox,
  submit_feedback_btn,
  feedback_sent_icon,
} from "../support/locators";

const question =
  "What is the capital of Spain? Give me the shortest version possible";
const feedback = "I asked for the shortest possible version";

describe("Response feedback", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.acceptCookies();
  });
  it("Provide positive feedback to a response", () => {
    cy.askQuestion(question);
    cy.get(like_btn).click();
    cy.get(thanks_feedback_icon).should("be.visible");
  });

  it("Provide negative feedback to a response", () => {
    cy.askQuestion(question);
    cy.get(dislike_btn).click();
    cy.get(bad_feedback_icon).should("be.visible");
    cy.get(feedback_form_link).click();
    cy.get(other_btn).click();
    cy.get(feedback_textbox).type(feedback, { force: true });
    cy.get(submit_feedback_btn).click();
    cy.get(feedback_sent_icon).should("be.visible");
  });
});
