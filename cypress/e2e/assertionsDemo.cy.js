it("Assertions Demo", () => {
  cy.visit("https://example.cypress.io");
  cy.wait(2000);
  cy.get(
    ":nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)"
  ).click();
  cy.get("#query-btn").should("contain", "Button");
});
