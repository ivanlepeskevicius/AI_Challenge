const img01 =
  "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg";
const img02 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIaD8N5L4pWwaerbLKpf_rDOK2Ng9JNEaEHgJojaVog&s";
const question = "Is this a dog? Give me the shortest possible version";

describe("Image Recognition Accuracy", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/images/blob**").as("imageUploaded");
    cy.visit("/");
    cy.acceptCookies();
  });
  it("AI successfully recognizes the animal on the photo", () => {
    cy.uploadImageUsingLink(img01, "@imageUploaded");
    cy.askQuestion(question);
    cy.checkAnswerContains('Yes')
  });

  it("Blurry photo - AI recognizes the animal on the photo", () => {
    cy.uploadImageUsingLink(img02, "@imageUploaded");
    cy.askQuestion(question);
    cy.checkAnswerContains('cat')
  });
});
