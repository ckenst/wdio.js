internetPage = require("../pages/internet.page");
loginData = require('../data/logindata');

describe("Test element actions", () => {
  it("should click element", () => {
    browser.url("/");
    internetPage.clickOnLInk();
    expect(browser.getUrl()).equals("http://the-internet.herokuapp.com/abtest");
  });

  it("Should get text", () => {
    browser.url("/");
    expect(internetPage.getSpecificElementText(1)).equals("A/B Testing");
  });

  it("should click checkbox", () => {
    internetPage.clickLink(6);
    internetPage.clickCheckbox(1);
    expect(internetPage.checkboxes(1).isSelected()).equals(true);
  });

  it("should uncheck checkbox", () => {
    internetPage.clickCheckbox(1);
    expect(internetPage.checkboxes(1).isSelected()).equals(false);
  });

  it("Should enter username", () => {
    browser.url(`/login`);
    internetPage.enterUsername(loginData.userName);
    assert.equal(loginData.userName, internetPage.username.getValue());
  });

  it("Should enter password", () => {
    browser.url(`/login`);
    internetPage.enterPassword(loginData.Password);
    assert.equal(loginData.Password, internetPage.password.getValue());
  });

  it("Should clear value", () => {
    internetPage.username.click();
    internetPage.username.clearValue();
    assert.equal("", internetPage.username.getValue());
  });
});
