/* eslint-disable no-undef */

describe("Sign Up Form", () => {
  describe("Success Testleri", () => {
    it("[1] opens signup page", () => {
      cy.visit("http://localhost:5173/signup");
    });

    it("[2] checks button disabled", () => {
      cy.visit("http://localhost:5173/signup");
      cy.get("[data-testid='signup-form-button']").should("be.disabled");
    });

    it("[3] checks button enabled on form inputs are valid.", () => {
      cy.visit("http://localhost:5173/signup");
      cy.get("[data-testid='signup-form-email']").type("emre@wit.com.tr");
      cy.get("[data-testid='signup-form-password']").type("emre@123T");
      cy.get("input[value='action']").check();
      cy.get("input[value='animation']").check();
      cy.get("input[value='crime']").check();
      cy.get("[data-testid='signup-form-button']").should("be.enabled");
    });

    it("[4] successfully sends form", () => {
      cy.visit("http://localhost:5173/signup");
      cy.get("[data-testid='signup-form-email']").type("emre@wit.com.tr");
      cy.get("[data-testid='signup-form-password']").type("emre@123T");
      cy.get("input[value='action']").check();
      cy.get("input[value='animation']").check();
      cy.get("input[value='crime']").check();
      cy.get("[data-testid='signup-form-button']").click();
      cy.url().should("contains", "/welcome");
    });
  });

  describe("Fail Testleri", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/signup");
    });

    it("[5] gets error on invalid email", () => {
      cy.get("[data-testid='signup-form-email']").type("emre");
      cy.get("[data-testid='error']").should("have.length", 1);
    });

    it("[6] gets error for short password", () => {
      cy.get("[data-testid='signup-form-password']").type("emre");
      cy.get("[data-testid='error']").should("have.length", 1);
    });

    it("[7] gets error for password without symbol", () => {
      cy.get("[data-testid='signup-form-password']").type("emre1234");
      cy.get("[data-testid='error']").should("have.length", 1);
    });

    it("[8] gets error for selected 2 genres", () => {
      cy.get("input[value='action']").check();
      cy.get("input[value='animation']").check();
      cy.get("[data-testid='error']").should("have.length", 1);
    });
  });
});
