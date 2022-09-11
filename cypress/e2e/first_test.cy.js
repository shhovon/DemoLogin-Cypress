/// <reference types="cypress" />

it("google test", function () {
  cy.visit("https://www.aiub.edu/");
  cy.get("#button-addon2 > .fa").click();
  cy.wait(2000);
  cy.get("#key").type("Something{Enter}");
});
