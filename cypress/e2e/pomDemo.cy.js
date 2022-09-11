import { LoginPage } from "./pages/login_page";
const loginPage = new LoginPage();

describe("All Login Tests", () => {
  beforeEach(() => {
    cy.visit("http://testphp.vulnweb.com/login.php");
  });
  it("Login with valid credentials", () => {
    loginPage.enterUsername("test");
    loginPage.enterPassword("test");
    loginPage.clickLogin();
    cy.get(":nth-child(6) > td > input").click();
  });

  it("Login with invalid credentials", () => {
    loginPage.enterUsername("test123");
    loginPage.enterPassword("test");
    loginPage.clickLogin();
    cy.get(":nth-child(6) > td > input").click();
  });
});
