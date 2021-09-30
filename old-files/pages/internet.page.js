class Internet {
  get pageHeader() {
    return $("h1.heading");
  }
  get subHeading() {
    return $("h2");
  }
  get h3Header() {
    return $("h3");
  }
  get pageFooter() {
    return $("#page-footer");
  }
  get parent() {
    return $("ul");
  }
  get childElements() {
    return this.parent.$$("li");
  }
  get firstLink() {
    return $("ul li:nth-child(1) a");
  }
  link(index) {
    return $(`ul li:nth-child(${index}) a`);
  }
  get username() {
    return $("#username");
  }
  get password() {
    return $("#password");
  }
  /**
   * Enter the username into the field
   * @param {String} text username to be entered
   */
  enterUsername(text) {
    this.username.waitForDisplayed();
    this.username.setValue(text);
  }
  /**
   * Enter the password into the field
   * @param {String} text password to be entered
   */
  enterPassword(text) {
    this.password.waitForDisplayed();
    this.password.setValue(text);
  }
  specificChildElement(index) {
    return this.parent.$(`li:nth-child(${index})`);
  }
  /**
   * Clicks on the link based on the index provided
   * @param {Number} index the index of the element
   */
  clickLink(index) {
    this.link(index).waitForDisplayed();
    this.link(index).click();
  }
  checkboxes(index) {
    return $(`#checkboxes input:nth-child(${index})`);
  }
  clickCheckbox(index) {
    this.checkboxes(index).waitForDisplayed();
    this.checkboxes(index).click();
  }
  getLiText() {
    this.childElements.filter(element => {
      console.log(element.getText());
    });
  }
  getSpecificElementText(index) {
    this.specificChildElement(index).waitForDisplayed();
    return this.specificChildElement(index).getText();
  }
  clickOnLInk() {
    if (this.firstLink.isDisplayed() === true) {
      this.firstLink.click();
    }
    this.h3Header.waitForDisplayed();
  }
}

module.exports = new Internet();
