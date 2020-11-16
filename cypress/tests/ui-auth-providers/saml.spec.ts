import { isMobile } from "../../support/utils";

describe("User Sign-up and Login", function () {
  beforeEach(function () {
    cy.task("db:seed");

    cy.server();
    cy.route("POST", "/bankAccounts").as("createBankAccount");

    cy.loginBySamlIdentityProviderApi(Cypress.env("auth_username"), Cypress.env("auth_password"));
  });
  it("should allow a visitor to login, onboard and logout", function () {
    /*cy.contains("Get Started").should("be.visible");

    // Onboarding
    cy.getBySel("user-onboarding-dialog").should("be.visible");
    cy.getBySel("user-onboarding-next").click();

    cy.getBySel("user-onboarding-dialog-title").should("contain", "Create Bank Account");

    cy.getBySelLike("bankName-input").type("The Best Bank");
    cy.getBySelLike("accountNumber-input").type("123456789");
    cy.getBySelLike("routingNumber-input").type("987654321");
    cy.getBySelLike("submit").click();

    cy.wait("@createBankAccount");

    cy.getBySel("user-onboarding-dialog-title").should("contain", "Finished");
    cy.getBySel("user-onboarding-dialog-content").should("contain", "You're all set!");
    cy.getBySel("user-onboarding-next").click();

    cy.getBySel("transaction-list").should("be.visible");

    // Logout User
    if (isMobile()) {
      cy.getBySel("sidenav-toggle").click();
    }
    cy.getBySel("sidenav-signout").click();

    cy.location("pathname").should("eq", "/");
    */
  });

  it.skip("shows onboarding", function () {
    cy.contains("Get Started").should("be.visible");
  });
});
