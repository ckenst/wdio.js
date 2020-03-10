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

  get FirstLink() {
    return $("ul li:nth-child(1) a");
  }

  specificChildElement(index) {
    return this.parent.$(`li:nth-child(${index})`);
  }

  getLiText() {
    this.childElements.filter(element => {
      console.log(element.getText());
    });
  }

  getSpecificElementText(index) {
    return this.specificChildElement(index).getText();
  }

  clickOnLInk() {
      if(this.FirstLink.isDisplayed() === true) {
          this.FirstLink.click()
      }
      browser.pause(5000)
  }
}
module.exports = new Internet();
