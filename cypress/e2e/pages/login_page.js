export class LoginPage {
  username_textbox = ":nth-child(1) > :nth-child(2) > input";
  password_textbox = ":nth-child(2) > :nth-child(2) > input";
  login_button = ":nth-child(3) > td > input";

  enterUsername(username) {
    cy.get(this.username_textbox).type(username);
  }
  enterPassword(password) {
    cy.get(this.password_textbox).type(password);
  }
  clickLogin() {
    cy.get(this.login_button).click();
  }
}
